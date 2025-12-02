 // Made by Misanthropy, Don't use it without permission.
 
 ItemEvents.modification(event => {

    event.modify('lethality:nightmare_sword', item => {

        let currentDamage = item.attackDamage || 0;
        item.attackDamage = currentDamage + 99;

       

    })


    event.modify('lethality:defiled_greatsword', item => {

        let currentDamage = item.attackDamage || 0;
        item.attackDamage = currentDamage + 32;

       

    })


    event.modify('brutality:royal_guardian_sword', item => {

        let currentDamage = item.attackDamage || 0;
        item.attackDamage = currentDamage + 1499;


    })


    event.modify('brutality:darkin_blade', item => {

        let currentDamage = item.attackDamage || 0;
        item.attackDamage = currentDamage + 24;

       

    })


    event.modify('lethality:hf_meowrasama', item => {

        let currentDamage = item.attackDamage || 0;
        item.attackDamage = currentDamage + 24;

       

    })

    event.modify('block_factorys_bosses:knight_sword', item => {

        let currentDamage = item.attackDamage || 0;
        item.attackDamage = currentDamage + 1799;

       

    })

}) 