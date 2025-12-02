// Made by a Linggango Community Member, Don't use it without my (Misanthropy) permission.

StartupEvents.registry("block", (event) => {
	event
		.create("blazerod_block")
		.displayName("Blaze Rod Block")
        .textureAll("kubejs:block/blazerod_block")
		.soundType("stone")
		.hardness(2.0)
		.resistance(5.0)
        .lightLevel(0.9)
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
});
