const { AuthenticationError } = require('apollo-server-express');
const { User, Action } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        console.log('QUERY_ME called')
        // console.log(context)
        if (context.user) {
            return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    // Get all actions of a certain category
    actions: async(parent, {category}) => {
      const params = category ? { category } : {};
      return Action.find(params);
    }
  },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      
      updateImpact: async (_, {input}, context) => {
        console.log('update Impact resolver called')
  
        // console.log(input)
        const {date, category, carbonContribution} = input;
        const me = await User.findOne({ _id: context.user._id });
        // const me = context.user;
        // console.log(me)
        const electricityCost = me.electricityBill / 30
        const parsedDate = new Date(date);
        // const formattedDate = parsedDate.toISOString(); 
        //console.log(`The date in ISO is ${formattedDate}`)
        const impactIndex = me.dailyImpact.findIndex((impact) => impact.date.toLocaleDateString() === parsedDate.toLocaleDateString());
        // const impactIndex = 0;
        //If index exists add carbonContribution to existing dailyImpact, otherwise create a new one.

        //Use switch instead of if statements for more streamlined code
        console.log(category)
        if(impactIndex !== -1){
          switch(category){
            case 'Travel':
              me.dailyImpact[impactIndex].travelContribution += carbonContribution;
              break;
            case 'Energy':
              me.dailyImpact[impactIndex].energyContribution += carbonContribution;
              break;
            case 'Food':
              me.dailyImpact[impactIndex].foodContribution += carbonContribution;
            break;
              default:
              throw new Error('Invalid Category')
          }
          me.impactScore += Math.floor(carbonContribution);
        }
        else{
          //create new impact and set carbon to correct category
          const newImpact = {
            date: date,
            travelContribution: category === 'Travel' ? carbonContribution : 0,
            energyContribution: category === 'Energy' ? carbonContribution : electricityCost,
            foodContribution: category === 'Food' ? carbonContribution : 0,
          };

          //push new Impact to dailyImpact array
          me.dailyImpact.unshift(newImpact);
          
          console.log(newImpact)
          console.log(me)
          me.impactScore += Math.floor(carbonContribution + electricityCost);
        }
        console.log(`Impact Score ${me.impactScore}`)
        
          //Update logged in user in database
        await User.findByIdAndUpdate(me._id, {
          dailyImpact: me.dailyImpact,
          impactScore: me.impactScore});

        return me;
      },

      offsetTotalImpact: async(_, {input} , context) => {
        console.log('Offset Total Impact Mutation Called')
        const {donationAmount} = input
        const carbonOffsetFromDonation = (donationAmount / 12.50) * 1000
        const me = await User.findOne({ _id: context.user._id });
        console.log(me.impactScore)
        console.log(`carbonOffsetFromDonation`)
        me.impactScore -= carbonOffsetFromDonation;

        console.log(`Impact Score ${me.impactScore}`)

        await User.findByIdAndUpdate(me._id,{
          impactScore: me.impactScore
        });

        return me
      },

      updateGoal: async (_, {goalText} , context) => {
        
       await User.findByIdAndUpdate(context.user._id,{
        weeklyGoal: weeklyGoal
       })

      },

      updateElectricityBill: async(_, {electricityBill}, context) => {
        console.log('Update Electricity Mutation Called')
        await User.findByIdAndUpdate(context.user._id,{
          electricityBill: electricityBill
        })
      }
    },
  };
  
  module.exports = resolvers;