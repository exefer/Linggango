// Made by Misanthropy, Don't use it without permission.

EntityJSEvents.attributes(event => {
    event.modify('minecraft:warden', attribute => {
        attribute.add("minecraft:generic.max_health", 1500)
        attribute.add("minecraft:generic.attack_damage", 50)
        attribute.add("minecraft:generic.movement_speed", 0.15)
    })

    event.modify('minecraft:zombie', attribute => {
        attribute.add("minecraft:generic.max_health", 25)
        attribute.add("minecraft:generic.attack_damage", 4.5)
        attribute.add("minecraft:generic.movement_speed", 0.090)
    })

    event.modify('minecraft:skeleton', attribute => {
        attribute.add("minecraft:generic.max_health", 10)
        attribute.add("minecraft:generic.attack_damage", 4.5)
        attribute.add("minecraft:generic.movement_speed", 0.050)
    })

    event.modify('armageddon_mod:eldoraththe_ancient_builder', attribute => {
        attribute.add("minecraft:generic.attack_damage", 30)
        attribute.add("minecraft:generic.movement_speed", 0.15)
        attribute.add("minecraft:generic.attack_knockback", 3)
    })

    event.modify('undergarden:forgotten_guardian', attribute => {
        attribute.add("minecraft:generic.attack_damage", 30)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 1.2)
        attribute.add("minecraft:generic.max_health", 1500)
    })

    event.modify('armageddon_mod:zoranththe_forgotten_one', attribute => {
        attribute.add("minecraft:generic.attack_damage", 40)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.5)
        attribute.add("minecraft:generic.armor", 20)        
    })

    event.modify('minecraft:ender_dragon', attribute => {
        attribute.add("minecraft:generic.armor", 20)   
    })

    event.modify('armageddon_mod:zoranththe_forgotten_one', attribute => {
        attribute.add("minecraft:generic.attack_damage", 40)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.5)
        attribute.add("minecraft:generic.armor", 30)
    })

    event.modify('armageddon_mod:elvenite_paladin', attribute => {
        attribute.add("minecraft:generic.attack_damage", 65)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.2)
        attribute.add("minecraft:generic.armor", 50)
        attribute.add("minecraft:generic.armor_toughness", 20)
    })

    event.modify('armageddon_mod:vaedricthe_fallen_wanderer', attribute => {
        attribute.add("minecraft:generic.attack_damage", 75)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.5)
        attribute.add("minecraft:generic.armor", 50)
        attribute.add("minecraft:generic.armor_toughness", 20)
    })

    event.modify('armageddon_mod:bringer_of_doom', attribute => {
        attribute.add("minecraft:generic.attack_damage", 75)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.5)
        attribute.add("minecraft:generic.armor", 50)
        attribute.add("minecraft:generic.armor_toughness", 20)
    })

    event.modify('armageddon_mod:bringer_of_doom_p_2', attribute => {
        attribute.add("minecraft:generic.attack_damage", 85)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.6)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })

    event.modify('armageddon_mod:the_famine', attribute => {
        attribute.add("minecraft:generic.attack_damage", 85)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.6)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })

    event.modify('armageddon_mod:the_chaos', attribute => {
        attribute.add("minecraft:generic.attack_damage", 85)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.6)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })

    event.modify('armageddon_mod:the_discord', attribute => {
        attribute.add("minecraft:generic.attack_damage", 85)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.6)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })

    event.modify('armageddon_mod:sanghor_lord_of_blood', attribute => {
        attribute.add("minecraft:generic.attack_damage", 90)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.6)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })

    event.modify('armageddon_mod:sanghor_lord_of_bloodp_2', attribute => {
        attribute.add("minecraft:generic.attack_damage", 95)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.6)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })

    event.modify('armageddon_mod:nyxaris_the_veil_of_oblivion', attribute => {
        attribute.add("minecraft:generic.attack_damage", 125)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 1.0)
        attribute.add("minecraft:generic.armor", 35)
        attribute.add("minecraft:generic.armor_toughness", 50)
    })
    
    event.modify('mowziesmobs:ferrous_wroughtnaut', attribute => {
        attribute.add("minecraft:generic.attack_damage", 40)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 2.0)
    })
     
    event.modify('minecraft:ender_dragon', attribute => {
        attribute.add("minecraft:generic.attack_damage", 60)
        attribute.add("minecraft:generic.max_health", 6500)
        attribute.add("minecraft:generic.armor", 35)
        attribute.add("minecraft:generic.armor_toughness", 50)
    })
    
    event.modify('born_in_chaos_v1:lord_pumpkinhead', attribute => {
        attribute.add("minecraft:generic.attack_damage", 60)
        attribute.add("minecraft:generic.max_health", 2500)
    })

    event.modify('terramity:trial_guardian', attribute => {
        attribute.add("minecraft:generic.attack_damage", 70)
    })
    
    event.modify('terramity:super_sniffer', attribute => {
        attribute.add("minecraft:generic.attack_damage", 55)
    })
      
    event.modify('terramity:gob', attribute => {
        attribute.add("minecraft:generic.attack_damage", 55)
    })
       
    event.modify('terramity:virtue', attribute => {
        attribute.add("minecraft:generic.attack_damage", 85)
    })
    
    event.modify('terramity:enchanter_merlin', attribute => {
        attribute.add("minecraft:generic.attack_damage", 90)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.6)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 10)
        })
        
    event.modify('terramity:sorceress_circe', attribute => {
        attribute.add("minecraft:generic.attack_damage", 80)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.6)
        attribute.add("minecraft:generic.armor", 10)
        attribute.add("minecraft:generic.armor_toughness", 10)
        })
            
    event.modify('terramity:gundalf', attribute => {
        attribute.add("minecraft:generic.attack_damage", 100)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 1.0)
        attribute.add("minecraft:generic.armor", 25)
        attribute.add("minecraft:generic.armor_toughness", 25)
        })
               
    event.modify('terramity:ultra_sniffer', attribute => {
        attribute.add("minecraft:generic.attack_damage", 150)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 1.0)
        attribute.add("minecraft:generic.armor", 25)
        attribute.add("minecraft:generic.armor_toughness", 25)
        })
                   
    event.modify('ancient_elements:ancient_elemental', attribute => {
        attribute.add("minecraft:generic.attack_damage", 120)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 1.0)
        attribute.add("minecraft:generic.armor", 25)
        attribute.add("minecraft:generic.armor_toughness", 25)
        attribute.add("minecraft:generic.max_health", 25500)
        })

        event.modify('armageddon_mod:iron_colossus', attribute => {
        attribute.add("minecraft:generic.attack_damage", 7)
        attribute.add("minecraft:generic.movement_speed", 0.2)
        attribute.add("minecraft:generic.attack_knockback", 0.5)
        attribute.add("minecraft:generic.armor", 5)
        attribute.add("minecraft:generic.armor_toughness", 2)
    })
    

})