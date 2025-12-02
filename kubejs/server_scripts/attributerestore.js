// Made by Misanthropy, Don't use it without permission.

PlayerEvents.tick(event => {

    if (event.player.age % 100 != 0) return

    let player = event.player
    let server = event.server
    

    if (!server || !server.persistentData || !server.persistentData.manaTiers) return


    let uuid = player.uuid.toString()
    let trueTier = server.persistentData.manaTiers[uuid] || 0
    

    if (trueTier === 0) return


    

    if (trueTier == 1) {
        if (player.getAttributeValue("irons_spellbooks:spell_power") != 3) {
            server.runCommandSilent(`attribute ${player.username} irons_spellbooks:spell_power base set 3`)
            server.runCommandSilent(`attribute ${player.username} ars_nouveau:ars_nouveau.perk.spell_damage base set 3`)
        }
    }


    else if (trueTier == 2) {
        if (player.getAttributeValue("irons_spellbooks:spell_power") != 5) {
            server.runCommandSilent(`attribute ${player.username} irons_spellbooks:spell_power base set 5`)
            server.runCommandSilent(`attribute ${player.username} ars_nouveau:ars_nouveau.perk.spell_damage base set 4`)
        }
    }


    else if (trueTier == 3) {
        if (player.getAttributeValue("irons_spellbooks:spell_power") != 8) {
            server.runCommandSilent(`attribute ${player.username} irons_spellbooks:spell_power base set 8`)
            server.runCommandSilent(`attribute ${player.username} ars_nouveau:ars_nouveau.perk.spell_damage base set 5`)
        }
    }
})