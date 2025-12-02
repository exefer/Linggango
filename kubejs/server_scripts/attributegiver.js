// Made by Misanthropy, Don't use it without permission.

ItemEvents.foodEaten(event => {
    let player = event.player
    let uuid = player.uuid.toString()
    
    let serverData = event.server.persistentData
    if (!serverData.manaTiers) serverData.manaTiers = {}
    
    let currentTier = serverData.manaTiers[uuid] || 0

    if (event.item.id == 'kubejs:fading_shard_of_compressed_mana') {
        if (currentTier < 1) {
            serverData.manaTiers[uuid] = 1
            player.tell("§4§lYour blood boils with raw mana..")
        } else {
            player.tell("§cYou are already too powerful for this weak shard.")
        }
    }

    if (event.item.id == 'kubejs:shard_of_compressed_mana') {
        if (currentTier < 2) {
            serverData.manaTiers[uuid] = 2
            player.tell("§c§lYour blood adapts, unifies with mana")
        } else {
            player.tell("§cYou have already absorbed this level of power.")
        }
    }

    if (event.item.id == 'kubejs:purified_shard_of_compressed_mana') {
        if (currentTier < 3) {
            serverData.manaTiers[uuid] = 3
            player.tell("§c§lYou fully unlock your potential with magic.")
        } else {
            player.tell("§dYou have already reached the pinnacle of mana.")
        }
    }
})