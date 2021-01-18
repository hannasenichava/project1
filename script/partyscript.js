const never = [
    {
        name: 'Never Have I Ever!',
        recipe: 'What you need: Drinks!',
        rules: 'Never Have I Ever is a great game to know your friends secrets! You have to share something that you have never done before and the people who have will take a sip of their drink. For example, when I say, "Never have I ever been arrested," all those in the group who have been arrested will have a drink. The key here is to make your friends admit their embarrassing stories so watch out for what you say!',
    }
]

const jenga = [
    {
        name: 'Drunk Jenga!',
        recipe: 'What you need: Jenga and Drinks! ',
        rules: 'Drunk Jenga is like normal Jenga but with funny and crazy challenges written on each of the 54 Jenga blocks. The trick is to pick up one block from the set pile of blocks with one hand and place it on top of the pile. If the stack falls, you chug your drink and pick up two blocks and complete the challenges.',
    }
]

const flip = [
    {
        name: 'Flip Cup!',
        recipe: 'What you need: Cups and Drinks!',
        rules: 'Flip Cup is a good starter for a house party. There are two teams competing against each other. Both teams stand on opposite sides of the table and keep their cups with drinks at the edge. Everyone must finish their drink and flip the cup with there fingers to the upside-down position before the next member begins. First team to complete this wins.',
    }
]

    const partySelect = document.getElementById('partySelection')
    const partyLi = document.getElementById('partyList')

    partySelection.addEventListener('change', (b) => {
    partyLi.innerText = '';

    if (b.target.value === 'neverEver'){ 
    never.map(nev => {
        const li = document.createElement('li');
        const div = document.getElementById('container')
        const h1 = document.createElement('H1');
        const h2 = document.createElement('H2');
        const p = document.createElement('p');

        h1.innerText = nev.name;
        h2.innerText = nev.recipe;
        p.innerText = nev.rules;

        // fzr target da div container e todos os apends h1,h2 e p.

        partyLi.appendChild(li);
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(p);
 
    })
    } 

    else if 
    
    (b.target.value === 'drunkJenga'){ 
        jenga.map(jen => {
            const li = document.createElement('li');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            
            h1.innerText = jen.name;
            h2.innerText = jen.recipe;
            p.innerText = jen.rules;
    
            partyLi.appendChild(li);
            li.appendChild(h1);
            li.appendChild(h2);
            li.appendChild(p);
        })
    } 

    else if 
    
    (b.target.value === 'flipCup'){ 
        flip.map(fli => {
            const li = document.createElement('li');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            h1.innerText = fli.name;
            h2.innerText = fli.recipe;
            p.innerText = fli.rules;

            partyLi.appendChild(li);
            li.appendChild(h1);
            li.appendChild(h2);
            li.appendChild(p);
        })
    } 

    else
    {
        const partys = [...never, ...jenga, ...flip]
        partys.map(pts => {
            const li = document.createElement('li');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            h1.innerText = pts.name;
            h2.innerText = pts.recipe;
            p.innerText = pts.rules;

            partyLi.appendChild(li);
            li.appendChild(h1);
            li.appendChild(h2);
            li.appendChild(p);
    
        })
    }
})