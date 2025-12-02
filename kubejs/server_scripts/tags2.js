// Made by Misanthropy, Don't steal without permission.
// This script makes so you can mine zinc ore with stone pickaxe.

ServerEvents.tags('block', event => {
  const zincBlocks = [
    'create:zinc_ore',
    'create:deepslate_zinc_ore'
  ]

  event.remove('minecraft:needs_iron_tool', zincBlocks)

  event.add('minecraft:needs_stone_tool', zincBlocks)
  })