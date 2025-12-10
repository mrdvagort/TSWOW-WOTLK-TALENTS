import { std } from "wow/wotlk"

// ============================================================================
// Balance Druid Talent Tree - Original Tree
// TalentTab ID: 283
// ============================================================================

// Get the Druid class
const DRUID_CLASS = std.Classes.load("DRUID")

// Get the Balance talent tree (index 0)
 const BALANCE_TALENT_TREE = DRUID_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the Balance tree
const existingTalents = BALANCE_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// PASTE PRINTER OUTPUT BELOW THIS LINE
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Starlight Wrath - Row 0, Column 1
 const STARLIGHT_WRATH = BALANCE_TALENT_TREE.Talents
    .addGet("default", "starlight-wrath")
    .Position.set(0, 1)

STARLIGHT_WRATH.Spells.add([16814, 16815, 16816, 16817, 16818]) // 5 ranks

// Genesis - Row 0, Column 2
 const GENESIS = BALANCE_TALENT_TREE.Talents
    .addGet("default", "genesis")
    .Position.set(0, 2)

GENESIS.Spells.add([57810, 57811, 57812, 57813, 57814]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Moonglow - Row 1, Column 0
 const MOONGLOW = BALANCE_TALENT_TREE.Talents
    .addGet("default", "moonglow")
    .Position.set(1, 0)

MOONGLOW.Spells.add([16845, 16846, 16847]) // 3 ranks

// Nature's Majesty - Row 1, Column 1
 const NATURES_MAJESTY = BALANCE_TALENT_TREE.Talents
    .addGet("default", "natures-majesty")
    .Position.set(1, 1)

NATURES_MAJESTY.Spells.add([35363, 35364]) // 2 ranks

// Improved Moonfire - Row 1, Column 3
 const IMPROVED_MOONFIRE = BALANCE_TALENT_TREE.Talents
    .addGet("default", "improved-moonfire")
    .Position.set(1, 3)

IMPROVED_MOONFIRE.Spells.add([16821, 16822]) // 2 ranks


// Row 2 (Tier 3)
// ============================================================================

// Brambles - Row 2, Column 0
 const BRAMBLES = BALANCE_TALENT_TREE.Talents
    .addGet("default", "brambles")
    .Position.set(2, 0)

BRAMBLES.Spells.add([16836, 16839, 16840]) // 3 ranks

// Nature's Grace - Row 2, Column 1
 const NATURE_S_GRACE = BALANCE_TALENT_TREE.Talents
    .addGet("default", "nature-s-grace")
    .Position.set(2, 1)
    .Requirements.add(NATURES_MAJESTY.ID, 2)

NATURE_S_GRACE.Spells.add([16880, 61345, 61346]) // 3 ranks

// Nature's Splendor - Row 2, Column 2
 const NATURE_S_SPLENDOR = BALANCE_TALENT_TREE.Talents
    .addGet("default", "nature-s-splendor")
    .Position.set(2, 2)
    .Requirements.add(NATURES_MAJESTY.ID, 2)

NATURE_S_SPLENDOR.Spells.add([57865]) // 1 rank

// Nature's Reach - Row 2, Column 3
 const NATURE_S_REACH = BALANCE_TALENT_TREE.Talents
    .addGet("default", "nature-s-reach")
    .Position.set(2, 3)

NATURE_S_REACH.Spells.add([16819, 16820]) // 2 ranks


// Row 3 (Tier 4)
// ============================================================================

// Vengeance - Row 3, Column 1
 const VENGEANCE = BALANCE_TALENT_TREE.Talents
    .addGet("default", "vengeance")
    .Position.set(3, 1)

VENGEANCE.Spells.add([16909, 16910, 16911, 16912, 16913]) // 5 ranks

// Celestial Focus - Row 3, Column 2
 const CELESTIAL_FOCUS = BALANCE_TALENT_TREE.Talents
    .addGet("default", "celestial-focus")
    .Position.set(3, 2)

CELESTIAL_FOCUS.Spells.add([16850, 16923, 16924]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Lunar Guidance - Row 4, Column 0
 const LUNAR_GUIDANCE = BALANCE_TALENT_TREE.Talents
    .addGet("default", "lunar-guidance")
    .Position.set(4, 0)

LUNAR_GUIDANCE.Spells.add([33589, 33590, 33591]) // 3 ranks

// Insect Swarm - Row 4, Column 1
 const INSECT_SWARM = BALANCE_TALENT_TREE.Talents
    .addGet("default", "insect-swarm")
    .Position.set(4, 1)

INSECT_SWARM.Spells.add([5570]) // 1 rank

// Improved Insect Swarm - Row 4, Column 2
 const IMPROVED_INSECT_SWARM = BALANCE_TALENT_TREE.Talents
    .addGet("default", "improved-insect-swarm")
    .Position.set(4, 2)

IMPROVED_INSECT_SWARM.Spells.add([57849, 57850, 57851]) // 3 ranks


// Row 5 (Tier 6)
// ============================================================================

// Dreamstate - Row 5, Column 0
 const DREAMSTATE = BALANCE_TALENT_TREE.Talents
    .addGet("default", "dreamstate")
    .Position.set(5, 0)

DREAMSTATE.Spells.add([33597, 33599, 33956]) // 3 ranks

// Moonfury - Row 5, Column 1
 const MOONFURY = BALANCE_TALENT_TREE.Talents
    .addGet("default", "moonfury")
    .Position.set(5, 1)

MOONFURY.Spells.add([16896, 16897, 16899]) // 3 ranks

// Balance of Power - Row 5, Column 2
 const BALANCE_OF_POWER = BALANCE_TALENT_TREE.Talents
    .addGet("default", "balance-of-power")
    .Position.set(5, 2)

BALANCE_OF_POWER.Spells.add([33592, 33596]) // 2 ranks


// Row 6 (Tier 7)
// ============================================================================

// Moonkin Form - Row 6, Column 1
 const MOONKIN_FORM = BALANCE_TALENT_TREE.Talents
    .addGet("default", "moonkin-form")
    .Position.set(6, 1)

MOONKIN_FORM.Spells.add([24858]) // 1 rank

// Improved Moonkin Form - Row 6, Column 2
 const IMPROVED_MOONKIN_FORM = BALANCE_TALENT_TREE.Talents
    .addGet("default", "improved-moonkin-form")
    .Position.set(6, 2)

IMPROVED_MOONKIN_FORM.Spells.add([48384, 48395, 48396]) // 3 ranks

// Improved Faerie Fire - Row 6, Column 3
 const IMPROVED_FAERIE_FIRE = BALANCE_TALENT_TREE.Talents
    .addGet("default", "improved-faerie-fire")
    .Position.set(6, 3)

IMPROVED_FAERIE_FIRE.Spells.add([33600, 33601, 33602]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Owlkin Frenzy - Row 7, Column 0
 const OWLKIN_FRENZY = BALANCE_TALENT_TREE.Talents
    .addGet("default", "owlkin-frenzy")
    .Position.set(7, 0)
    .Requirements.add(MOONKIN_FORM.ID, 1)

OWLKIN_FRENZY.Spells.add([48389, 48392, 48393]) // 3 ranks

// Wrath of Cenarius - Row 7, Column 2
 const WRATH_OF_CENARIUS = BALANCE_TALENT_TREE.Talents
    .addGet("default", "wrath-of-cenarius")
    .Position.set(7, 2)

WRATH_OF_CENARIUS.Spells.add([33603, 33604, 33605, 33606, 33607]) // 5 ranks


// Row 8 (Tier 9)
// ============================================================================

// Eclipse - Row 8, Column 0
 const ECLIPSE = BALANCE_TALENT_TREE.Talents
    .addGet("default", "eclipse")
    .Position.set(8, 0)

ECLIPSE.Spells.add([48516, 48521, 48525]) // 3 ranks

// Typhoon - Row 8, Column 1
 const TYPHOON = BALANCE_TALENT_TREE.Talents
    .addGet("default", "typhoon")
    .Position.set(8, 1)
    .Requirements.add(MOONKIN_FORM.ID, 1)

TYPHOON.Spells.add([50516]) // 1 rank

// Force of Nature - Row 8, Column 2
 const FORCE_OF_NATURE = BALANCE_TALENT_TREE.Talents
    .addGet("default", "force-of-nature")
    .Position.set(8, 2)

FORCE_OF_NATURE.Spells.add([33831]) // 1 rank

// Gale Winds - Row 8, Column 3
 const GALE_WINDS = BALANCE_TALENT_TREE.Talents
    .addGet("default", "gale-winds")
    .Position.set(8, 3)

GALE_WINDS.Spells.add([48488, 48514]) // 2 ranks


// Row 9 (Tier 10)
// ============================================================================

// Earth and Moon - Row 9, Column 1
 const EARTH_AND_MOON = BALANCE_TALENT_TREE.Talents
    .addGet("default", "earth-and-moon")
    .Position.set(9, 1)

EARTH_AND_MOON.Spells.add([48506, 48510, 48511]) // 3 ranks


// Row 10 (Tier 11)
// ============================================================================

// Starfall - Row 10, Column 1
 const STARFALL = BALANCE_TALENT_TREE.Talents
    .addGet("default", "starfall")
    .Position.set(10, 1)

STARFALL.Spells.add([48505]) // 1 rank
