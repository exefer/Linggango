// Made by a member in Linggango Community, Don't use it without my (Misanthropy) permission.

ServerEvents.recipes((event) => {
	event.shapeless(
		Item.of("kubejs:blazerod_block", 1), 
		[
			"9x minecraft:blaze_rod"
		]
	);
	event.custom({
		type: "powah:energizing",
		ingredients: [
			{
				item: "minecraft:iron_block",
			},
			{
				item: "minecraft:gold_block",
			},
		],
		energy: 90000,
		result: {
			item: "powah:energized_steel_block",
		},
	});
	event.custom({
		type: "powah:energizing",
		ingredients: [
			{
				item: "kubejs:blazerod_block",
			},
		],
		energy: 810000,
		result: {
			item: "powah:blazing_crystal_block",
		},
	});
	event.custom({
		type: "powah:energizing",
		ingredients: [
			{
				item: "minecraft:diamond_block",
			},
		],
		energy: 2700000,
		result: {
			item: "powah:niotic_crystal_block",
		},
	});
	event.custom({
		type: "powah:energizing",
		ingredients: [
			{
				item: "minecraft:emerald_block",
			},
		],
		energy: 9000000,
		result: {
			item: "powah:spirited_crystal_block",
		},
	});
});
