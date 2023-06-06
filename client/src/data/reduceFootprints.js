const reduceFootprints = [
    {
        advice: 'Start your own compost',
        description: 'You can start your own compost at home simply by collecting all of your food scraps and storing them in your freezer. You could even start a community composting project through your apartment building or neighborhood.',
    },
    {
        advice: 'Participate in Meatless Monday',
        description: 'Give up eating meat at least one day a week. If every American chose not to eat meat just once a week, it would save 1.4 billion animals and be equivalent to taking 500 thousand cars off the road.',
    },
    {
        advice: 'Start your own garden',
        description: 'By growing your own food, you eliminate the emissions that come from the transportation of goods to your local markets and mass grocery stores.',
    },
    {
        advice: 'Buy locally sourced food',
        description: 'When you support the produce grown closest to you, you reduce the emissions it takes to transport the food.',
    },
    {
        advice: 'Only buy groceries you need',
        description: 'When you go grocery shopping, only buy what you need for the week in order to minimize waste. Try not to not buy in bulk unless you know you will be able to eat everything before it goes bad',
    },
    {
        advice: 'Donate excess food',
        description: 'If you end up with more food than you can eat, make sure you donate it to a local soup kitchen or someone in need, especially if it will go bad within the next few days.',
    },
    {
        advice: 'Buy ethically sourced honey',
        description: 'A bee will only produce about a teaspoon of honey in its lifetime. This means the mass-produced honey you see in most grocery stores is made by artificially inseminating bees to produce more honey. These inhumane practices with bees are causing their species to rapidly die out. If you want honey, buy it from a local farm whose practices are ethically sound.',
    },
    {
        advice: 'Eat at sustainable restaurants',
        description: 'Nowadays, many restaurants pride themselves on being “farm to table.” This means they get their food directly from local farms, or as close to one as they can get. If you decide to go out to eat, choose to go to places that serve sustainably sourced food.',
    },
    {
        advice: 'Store your food properly so it stays fresher for longer',
        description: 'Look up exactly how to store each product you buy. There are many websites that can help you determine exactly how to keep your food and produce the freshest it can be.',
    },
    {
        advice: 'Buy food that is in season',
        description: 'Look up exactly how to store each product you buy. There are many websites that can help you determine exactly how to keep your food and produce the freshest it can be.',
    },
    {
        advice: 'Go vegetarian at home',
        description: 'If it isn’t ideal to transition to full vegetarianism, try cooking vegetarian at least one day a week. It will get you into the habit of cooking at home without relying on chicken or red meat.',
    },
    {
        advice: 'Cook more meals at home',
        description: 'Americans waste roughly 50% of all food produced. Instead of going out, ordering a big meal, and only eating half of it, go home and cook a smaller meal. This way, you won’t contribute to the restaurant’s overall waste, and you will also save money!',
    },
    {
        advice: 'Use a reusable water bottle',
        description: 'This is one of the oldest tricks in the book. In order to reduce your plastic usage by the pound, buy a reusable water bottle that you can use everyday.',
    },
    {
        advice: 'Take shorter showers',
        description: 'Considering a shower uses about 2.5 gallons per minute, cutting your shower time down by 5 to 10 minutes can save you between 12 and 25 gallons per shower.',
    },
    {
        advice: 'Use less hot water',
        description: 'By washing your clothes in cold water, and using cold water to wash your dishes, you can save the energy it takes to heat the water.',
    },
    {
        advice: 'Buy plants that require less water',
        description: 'If you choose to have plants in your home or around your home, make sure that you do not overwater them. Rather than having automated sprinklers, water them when the plants actually need it. Even better, buy and upkeep plants that do not require much watering at all.',
    },
    {
        advice: 'Water your lawn less',
        description: 'Many people have a timed sprinkler system for their lawn, even when it rains. Instead of wasting water and money, only water your lawn when it needs it.',
    },
    {
        advice: 'Recycle at home',
        description: 'Recycling and composting are two major ways to reduce your carbon footprint. By recycling your plastics and putting your food scraps in a personal compost pile, you can instantly reduce your environmental impact at home.',
    },
    {
        advice: 'Replace your old lightbulbs with LED lights',
        description: 'Changing out any old or dimming light bulbs is an easy way to save energy in your home. Old light bulbs and incandescent light bulbs take up excess energy, so replacing them with LED lights can conserve thousands of watts of energy each year',
    },
    {
        advice: 'Insulate your home',
        description: 'Insulating your home will help control your indoor climate so you stay warm in the winter and cool in the summer without driving up your energy bills. You will save more energy (and money) from season to season.',
    },
    {
        advice: 'Replace your old windows',
        description: 'Older windows let unwanted air sneak in no matter what season it is, making you change the thermostat more often. When replacing your windows, you will likely offset the cost with the energy savings in just a few months. You can also go the cheaper route and insulate your windows by covering them in plastic.',
    },
    {
        advice: 'Unplug your unused appliances',
        description: 'Without even realizing, the machines that you keep plugged in - like your coffee maker or digital alarm clock - can drive up your energy bill. Your coffee maker, for example, may be using excess energy to run its clock, so make sure to unplug or turn off any unused appliances while you are out of the house.',
    },
    {
        advice: 'Use a dishwasher instead of hand washing dishes',
        description: 'When you hand wash dishes, you use 2 gallons of water every minute, whereas a dishwasher only uses 4-6 gallons per cycle. This means you can wash almost 4 times the amount of dishes and use half the amount of water by switching over.',
    },
    {
        advice: 'Lower your heat and shut off air conditioning',
        description: 'Whenever you leave the house be sure to turn down your heat or shut off your air conditioning. You can even have a device installed, such as the Wiser Air Smart Thermostat, to help you do this automatically.',
    },
    {
        advice: 'Use a dishwasher instead of hand washing dishes',
        description: 'When you hand wash dishes, you use 2 gallons of water every minute, whereas a dishwasher only uses 4-6 gallons per cycle. This means you can wash almost 4 times the amount of dishes and use half the amount of water by switching over.',
    },
    {
        advice: 'Turn off your ice maker',
        description: 'By shutting off the ice maker in your fridge, you can actually decrease your energy consumption by 12-20%. Ice makers have their own heating systems and mechanics to move ice from one place to another, so shutting it off when you don’t need it you can easily save energy.',
    },
    {
        advice: 'Monitor the temperature inside your fridge and freezer',
        description: 'Make sure your fridge is between 35 and 38 degrees Fahrenheit to ensure it’s not too cold or using too much energy. You should also check the fridge seal to make sure no cold air is escaping.',
    },
    {
        advice: 'Don’t put hot objects immediately into the fridge or freezer',
        description: 'If you let your leftovers cool before putting them in the fridge, less energy is required from your fridge to keep them cold.',
    },
    {
        advice: 'Clean out your fridge more often',
        description: 'You can reduce the energy your fridge uses by cleaning out any food you are not going to eat. When food sits in the fridge, it takes up space and energy. Clean out your fridge weekly, but don’t leave it too empty, otherwise it won’t maintain its cold temperature.',
    },
    {
        advice: 'Install solar panels',
        description: 'Going solar is a great way to reduce your carbon footprint. By installing solar panels, you have the potential to offset up to 100% of your electricity usage depending on how many panels you install and how many kWhs you use each month.',
    },
    {
        advice: 'Check your tire pressure',
        description: 'Flat or quickly flattening tires can really hurt your gas mileage. With new tires, you can maximize your miles per gallon, and for every gallon of gas saved, 20 pounds of CO2 won’t be released into the atmosphere.',
    },
    {
        advice: 'Carpool',
        description: 'One of the best ways to reduce your carbon footprint is by carpooling with friends. Whether you are going to dinner or driving to school, use one vehicle to get there. Depending on how often you carpool and the distance you drive you could save thousands of dollars and gallons of gas.',
    },
    {
        advice: 'Use public transportation',
        description: 'If you are in an area where public transportation is accessible, use it! By using public transportation, you can drastically increase your energy savings and reduce the number of cars on the road.',
    },
    {
        advice: 'Ride your bike or join a bike share',
        description: 'Alike to using public transportation or carpooling, riding a bike takes cars off the road and lowers emissions. Riding a bike is an extremely energy efficient form of travel, so make sure to go out and ride if your area is bike friendly!',
    },
    {
        advice: 'Drive safer',
        description: 'If you stay aware and alert while driving you will avoid hitting any animals and, therefore, reduce accidents and wildlife casualties.',
    },
    {
        advice: 'Travel by car or train instead of flying',
        description: 'When you go on a trip, try to travel by car or train instead of flying on a plane. You will help prevent thousands of pounds of non-renewable energy sources from being released directly into the atmosphere during air travel.',
    },
    {
        advice: 'Spend more weekends traveling close by',
        description: 'Instead of traveling far away for the weekend, spend more time at tourist sites, restaurants, and museums close by to where you live.',
    },
    {
        advice: 'Utilize technology to reduce work-related travel',
        description: 'Instead of traveling for business meetings, connect with people online with services like Skype, FaceTime, and UberConference.',
    },
    {
        advice: 'Fly economy class',
        description: 'Alike to carpooling, flying economy class spreads out carbon emissions across masses of people. A handful of people flying on private plane, for example, will each make a larger (negative) impact.',
    },
    {
        advice: 'Recycle your old clothes',
        description: 'You can donate your old clothes to a charity or even brands that have a good return policy. H&M, for example, launched a garment collecting program back in 2013 that lets you drop off and recycle garments in any condition to any H&M store in the world.',
    },
    {
        advice: 'Shop at secondhand stores',
        description: 'Instead of buying everything new, check out your local thrift stores to shop for clothes.',
    },
    {
        advice: 'Buy fair trade clothing',
        description: 'Many store now sell “fair trade” or sustainably manufactured clothing. Threads for Thought is one example of the many sustainable brands today.',
    },
    {
        advice: 'Only shop for things you need',
        description: 'Spend less time shopping solely for pleasure. Instead of buying all the clothes you want, try shopping only for what you actually need.',
    },
    {
        advice: 'Try more holistic remedies',
        description: 'Instead of taking prescription medications and antibiotics, try more holistic remedies. When you take too many antibiotics, you start to wipe out the good bacteria in your body, making you (and even others) more susceptible to illness.',
    },
    {
        advice: 'Buy natural products',
        description: 'You should be able to read and properly pronounce every ingredient in what you eat. This general rule should also apply to what you put on your skin. For example, even though you aren’t actually ingesting your hand lotion, you are still absorbing it through your skin.',
    },
    {
        advice: 'Plant a tree',
        description: 'This is a much larger task, but, if you come together as a community and plant trees in your local parks, you can make a huge impact.',
    },
    {
        advice: 'Volunteer for a Community Garden',
        description: 'This can bring your community together as well as grow more local, fresh produce for everyone in the surrounding area.',
    },
    {
        advice: 'Support local businesses',
        description: 'Buy from local business instead of wasteful big-box stores. Not only will you help support your local co-op, pharmacies, and restaurants, but you’ll reduce waste.',
    },
]

export default reduceFootprints;