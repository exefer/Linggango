// Made by Misanthropy, Don't use it without permission.
// This script changes the behaviour of artifacts to be more balanced.

ServerEvents.loaded(event => {
if(event.server.persistentData.artifactsGamerulesSet) return;
  event.server.runCommandSilent('gamerule artifacts.vampiricGlove.maxHealingPerHit 2');
  event.server.runCommandSilent('gamerule artifacts.snorkel.isInfinite false');  
  event.server.persistentData.artifactsGamerulesSet = true
})
