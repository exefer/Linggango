// Made by Misanthropy
const UUID = Java.loadClass('java.util.UUID')

ItemEvents.modification(event => {

    const armor1 = [
        'cataclysm:cursium_helmet',
        'cataclysm:cursium_chestplate',
        'cataclysm:cursium_leggings',
        'cataclysm:cursium_boots'
    ]

    armor1.forEach((itemId, index) => {
        event.modify(itemId, item => {
            item.addAttribute('minecraft:generic.armor', UUID.fromString(`12345678-AAAA-AAAA-AAAA-00000000000${index}`), 'Armor Point', 5.0, 'addition')
            item.addAttribute('minecraft:generic.armor_toughness', UUID.fromString(`12345678-BBBB-BBBB-BBBB-00000000000${index}`), 'Armor Toughness', 5.0, 'addition')
            item.addAttribute('irons_spellbooks:spell_power', UUID.fromString(`12345678-CCCC-CCCC-CCCC-00000000000${index}`), 'Spell Power', 0.05, 'multiply_base')
            item.addAttribute('minecraft:generic.max_health', UUID.fromString(`12345678-DDDD-DDDD-DDDD-00000000000${index}`), 'Max Health', 10.0, 'addition')
        })
    })

    const armor2 = [
        'knightsnmages:elite_mage_helmet',
        'knightsnmages:elite_mage_chestplate',
        'knightsnmages:elite_mage_leggings',
        'knightsnmages:elite_mage_boots'
    ]

    armor2.forEach((itemId, index) => {
        event.modify(itemId, item => {
            item.addAttribute('minecraft:generic.armor', UUID.fromString(`12345678-EEEE-EEEE-EEEE-00000000000${index}`), 'Armor Point', 15.0, 'addition')
            item.addAttribute('minecraft:generic.armor_toughness', UUID.fromString(`12345678-FFFF-FFFF-FFFF-00000000000${index}`), 'Armor Toughness', 5.0, 'addition')
            item.addAttribute('irons_spellbooks:fire_spell_power', UUID.fromString(`12345678-1111-1111-1111-00000000000${index}`), 'Fire Power', 0.2, 'multiply_base')
            item.addAttribute('minecraft:generic.max_health', UUID.fromString(`12345678-2222-2222-2222-00000000000${index}`), 'Max Health', 10.0, 'addition')
        })
    })

    const armor3 = [
        'knightsnmages:dark_knight_helmet',
        'knightsnmages:dark_knight_chestplate',
        'knightsnmages:dark_knight_leggings',
        'knightsnmages:dark_knight_boots'
    ]

    armor3.forEach((itemId, index) => {
        event.modify(itemId, item => {
            item.addAttribute('minecraft:generic.armor', UUID.fromString(`12345678-3333-3333-3333-00000000000${index}`), 'Armor Point', 25.0, 'addition')
            item.addAttribute('minecraft:generic.armor_toughness', UUID.fromString(`12345678-4444-4444-4444-00000000000${index}`), 'Armor Toughness', 10.0, 'addition')
            item.addAttribute('irons_spellbooks:blood_spell_power', UUID.fromString(`12345678-5555-5555-5555-00000000000${index}`), 'Blood Power', 0.3, 'multiply_base')
            item.addAttribute('minecraft:generic.max_health', UUID.fromString(`12345678-6666-6666-6666-00000000000${index}`), 'Max Health', 20.0, 'addition')
        })
    })

    const armor4 = [
        'knightsnmages:blue_knight_helmet',
        'knightsnmages:blue_knight_chestplate',
        'knightsnmages:blue_knight_leggings',
        'knightsnmages:blue_knight_boots'
    ]

    armor4.forEach((itemId, index) => {
        event.modify(itemId, item => {
            item.addAttribute('minecraft:generic.armor', UUID.fromString(`12345678-7777-7777-7777-00000000000${index}`), 'Armor Point', 5.0, 'addition')
            item.addAttribute('minecraft:generic.armor_toughness', UUID.fromString(`12345678-8888-8888-8888-00000000000${index}`), 'Armor Toughness', 5.0, 'addition')
            item.addAttribute('irons_spellbooks:holy_spell_power', UUID.fromString(`12345678-9999-9999-9999-00000000000${index}`), 'Holy Power', 0.5, 'multiply_base')
            item.addAttribute('minecraft:generic.max_health', UUID.fromString(`12345678-0000-0000-0000-11111111111${index}`), 'Max Health', 2.0, 'addition')
        })
    })

})