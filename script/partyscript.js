const kings = [
    {
        img: '/images/party.jpg',
        name: 'Kings Cups!',
        recipe: 'What you need: Cards and Drinks!',
        rules: 'Kings Cup is best enjoyed with a large number of people. Every time you pick a card, you have to do what the list below says. The more drunk, the better!',
        imgkings:  'https://s3.scoopwhoop.com/anj/drinkinggame/723404056.png',
    }
]

const never = [
    {
        img:  '/images/never.jpg',
        name: 'Never Have I Ever!',
        recipe: 'What you need: Drinks!',
        rules: 'Never Have I Ever is a great game to know your friends secrets! You have to share something that you have never done before and the people who have will take a sip of their drink. For example, when I say, "Never have I ever been arrested," all those in the group who have been arrested will have a drink. The key here is to make your friends admit their embarrassing stories so watch out for what you say!',
    }
]

const jenga = [
    {
        img: '/images/jenga.jpg',
        name: 'Drunk Jenga!',
        recipe: 'What you need: Jenga and Drinks! ',
        rules: 'Drunk Jenga is like normal Jenga but with funny and crazy challenges written on each of the 54 Jenga blocks. The trick is to pick up one block from the set pile of blocks with one hand and place it on top of the pile. If the stack falls, you chug your drink and pick up two blocks and complete the challenges.',
    }
]

const thumper = [
    {
        img: '/images/thump.jpg',
        name: 'Thumper!',
        recipe: 'What you need: Drinks! ',
        rules: `This is a quick, easy game for the time when people start falling asleep! All you need to do is sit around a table and pick a hand motion for yourself. You could choose a victory sign or let your imagination run wild (or dirty ;) ). Everyone thumps at the table and the game begins. You start your hand action and then do someone else's action, while the others continue thumping. Now, the person whose hand action was done repeats his action, and of the one whose turn he wants next. Whoever messes up or takes too long to react, drinks. To make the game more fun, you could also make a sound for everyone and do the action AND the sound. Get it?`,
    }
]

const straight = [
    {
        img: '/images/straight.jpg',
        name: 'Straight Face!',
        recipe: 'What you need: Drinks! ',
        rules: `When you get drunk, it's tough to keep a straight face and this game challenges just that. You write funny or inappropriate sentences on small pieces of paper - ones that are tough to read while keeping a straight face. Each player picks up a chit of paper and tries to keep a straight face. The one who giggles or reacts has to drink!`,
    }
]

const flip = [
    {
        img: '/images/flip.jpg',
        name: 'Flip Cup!',
        recipe: 'What you need: Cups and Drinks!',
        rules: `One of the easiest games, each player starts counting a number and says it aloud, except 7 and its multiples, in which case, you say buzz. If you don't, you drink. Simple!`,
    }
]

const buzz = [
    {
        img: '/images/buzz.jpg',
        name: 'Buzz!',
        recipe: 'What you need: Drinks!',
        rules: `Flip Cup is a good starter for a house party. There are two teams competing against each other. Both teams stand on opposite sides of the table and keep their cups with drinks at the edge. Everyone must finish their drink and flip the cup with there fingers to the upside-down position before the next member begins. First team to complete this wins.`,
    }
]

const most = [
    {
        img: '/images/most.jpg',
        name: 'Most Likely!',
        recipe: 'What you need: Drinks!',
        rules: `The group sits in a circle and asks a 'most likely' question. For example, "Who would be most likely to fart in front of strangers?" After counting to three, everyone points at a person who they think are most likely to do so. The person who has the maximum number of fingers pointed at them, drinks as many drinks.`,
    }
]

const bite = [
    {
        img: '/images/bite.jpg',
        name: 'Bite The Bag!',
        recipe: 'What you need: Drinks!',
        rules: `This is a fun game which I am definitely trying this weekend. So you keep a bag on the ground and take turns to lean and pick it up using only your mouth. Mind you, no hands allowed. If you can't pick the bag, you have to drink. As each round passes, an inch of the bag is chopped, and this goes on for as many rounds till only the bottom of the bag is left.`,
    }
]

const hip = [
    {
        img: '/images/hip.jpg',
        name: 'Attached At The Hip!',
        recipe: 'What you need: Drinks!',
        rules: `An awesome ice breaker for your guests -  this game will get them close, quite literally! So, you scribble body parts on pieces of paper and put them together. Everyone makes a team of two and picks up two chits. They have to make sure that the body parts mentioned in the chits touch each other or are 'attached' for as long as they can. Every time someone separates, they take a shot.`,
    }
]

    const partySelect = document.getElementById('partySelection')
    const partyLi = document.getElementById('partyList')

    partySelection.addEventListener('change', (b) => {
    partyLi.innerText = '';

    if (b.target.value === 'kingsCup'){ 
    kings.map(king => {
        const li = document.createElement('li');
        const div = document.getElementById('container')
        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const imgkings = document.createElement('img');



        img.src = king.img;
        h1.innerText = king.name;
        h2.innerText = king.recipe;
        p.innerText = king.rules;
        imgkings.src = king.imgkings;
        imgkings.classList.add("imgkings")

        // fzr target da div container e todos os apends h1,h2 e p.

        partyLi.appendChild(li);
        partyLi.appendChild(img);
        partyLi.appendChild(h1);
        partyLi.appendChild(h2);
        partyLi.appendChild(p);
        partyLi.appendChild(imgkings);
 
    })
    } 

    else if

    (b.target.value === 'neverEver'){ 
        never.map(nev => {
            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('H1');
            const h2 = document.createElement('H2');
            const p = document.createElement('p');
    console.log(nev)
            img.src = nev.img;
            h1.innerText = nev.name;
            h2.innerText = nev.recipe;
            p.innerText = nev.rules;
    
            // fzr target da div container e todos os apends h1,h2 e p.
    
            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);
     
        })
        } 

    else if 
    
    (b.target.value === 'drunkJenga'){ 
        jenga.map(jen => {
            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            
            img.src = jen.img;
            h1.innerText = jen.name;
            h2.innerText = jen.recipe;
            p.innerText = jen.rules;
    
            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);
        })
    }
    
    else if

    (b.target.value === 'thumper'){ 
        thumper.map(thump => {
            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('H1');
            const h2 = document.createElement('H2');
            const p = document.createElement('p');
    
            img.src = thump.img;
            h1.innerText = thump.name;
            h2.innerText = thump.recipe;
            p.innerText = thump.rules;
    
            // fzr target da div container e todos os apends h1,h2 e p.
    
            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);
     
        })
        } 

        else if

        (b.target.value === 'straight'){ 
            straight.map(strai => {
                const li = document.createElement('li');
                const div = document.getElementById('container')
                const img = document.createElement('img');
                const h1 = document.createElement('H1');
                const h2 = document.createElement('H2');
                const p = document.createElement('p');
        
                img.src = strai.img;
                h1.innerText = strai.name;
                h2.innerText = strai.recipe;
                p.innerText = strai.rules;
        
                // fzr target da div container e todos os apends h1,h2 e p.
        
                partyLi.appendChild(li);
                partyLi.appendChild(img);
                partyLi.appendChild(h1);
                partyLi.appendChild(h2);
                partyLi.appendChild(p);
         
            })
            } 

    else if 
    
    (b.target.value === 'flipCup'){ 
        flip.map(fli => {
            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            img.src = fli.img;
            h1.innerText = fli.name;
            h2.innerText = fli.recipe;
            p.innerText = fli.rules;

            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);
        })
    } 

    else if 
    
    (b.target.value === 'buzz'){ 
        buzz.map(buz => {
            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            img.src = buz.img;
            h1.innerText = buz.name;
            h2.innerText = buz.recipe;
            p.innerText = buz.rules;

            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);
        })
    } 

    else if 
    
    (b.target.value === 'most'){ 
        most.map(mos => {
            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            img.src = mos.img;
            h1.innerText = mos.name;
            h2.innerText = mos.recipe;
            p.innerText = mos.rules;

            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);
        })
    } 

    else if 
    
    (b.target.value === 'bite'){ 
        bite.map(bit => {
            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            img.src = bit.img;
            h1.innerText = bit.name;
            h2.innerText = bit.recipe;
            p.innerText = bit.rules;

            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);
        })
    } 

    else if 
    
    (b.target.value === 'hip'){ 
        hip.map(hi => {
            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            img.src = hi.img;
            h1.innerText = hi.name;
            h2.innerText = hi.recipe;
            p.innerText = hi.rules;

            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);
        })
    } 

    else
    {
        const partys = [...kings, ...never, ...jenga, ...thumper, ...straight,  ...flip, ...buzz, ...most, ...bite, ...hip]
        partys.map(pts => {


            const li = document.createElement('li');
            const div = document.getElementById('container')
            const img = document.createElement('img');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            
            img.src = pts.img;
            h1.innerText = pts.name;
            h2.innerText = pts.recipe;
            p.innerText = pts.rules;

            partyLi.appendChild(li);
            partyLi.appendChild(img);
            partyLi.appendChild(h1);
            partyLi.appendChild(h2);
            partyLi.appendChild(p);

            if (pts.name === "Kings Cups!") {
                const imgkings = document.createElement('img');
                imgkings.src = pts.imgkings;
                imgkings.classList.add("imgkings");
                partyLi.appendChild(imgkings);
            }
            
            
    
        })
    }
})

