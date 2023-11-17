const ITEMS = {
  "meatNugget": {
    "itemName": "Meat Nugget",
    "pickupText": "Enemies drop chunks of healing meat.",
    "fullDescription": "<yellow>8%</yellow> chance on hit to <blue>drop 2 meat nuggets</blue> that <green>heal</green> for <green>2x8</green> <gray>(+6 per stack) </gray><green>health</green>.",
    "category": "Health",
    "achievement": [
      "pickup_meatNugget_got",
      "pickup_meatNugget_viewed"
    ],
    "image": "Meat_Nugget.webp"
  },
  "fireShield": {
    "itemName": "Fire Shield",
    "pickupText": "Retaliate on taking heavy damage.",
    "fullDescription": "After taking more than <gray>10% of your health</gray> as damage, explode for <yellow>400%</yellow> <gray>(+200% per stack) </gray><green>damage</green>, <blue>knocking enemies away</blue> <gray>(+20% force per stack)</gray>.",
    "category": "Damage",
    "achievement": [
      "pickup_fireShield_got",
      "pickup_fireShield_viewed"
    ],
    "image": "Fire_Shield.webp"
  },
  "bustlingFungus": {
    "itemName": "Bustling Fungus",
    "pickupText": "Heal quickly when standing still for 2 seconds.",
    "fullDescription": "After standing still for 2 seconds, <green>heal</green> for <green>4.5%</green> <gray>(+4.5% per stack)</gray> of your <green>health</green> every second to yourself and nearby allies.",
    "category": "Health",
    "achievement": [
      "pickup_bustlingFungus_got",
      "pickup_bustlingFungus_viewed"
    ]
  },
  "lensMakersGlasses": {
    "itemName": "Lens Maker's Glasses",
    "pickupText": "Chance to deal double damage.",
    "fullDescription": "Your attacks have a <yellow>10%</yellow> <gray>(+7% per stack)</gray> chance to <green>'Critically Strike'</green>, dealing <yellow>double damage</yellow>.",
    "category": "Damage",
    "achievement": [
      "pickup_lensMakersGlasses_got",
      "pickup_lensMakersGlasses_viewed"
    ]
  },
  "sproutingEgg": {
    "itemName": "Sprouting Egg",
    "pickupText": "Rapidly heal outside of danger.",
    "fullDescription": "After not being hit for 7 seconds, increase <green>health regeneration</green> by <green>2.4</green> <gray>(+2.4 per stack) </gray><green>hp</green> per second.",
    "category": "Health",
    "achievement": [
      "pickup_sproutingEgg_got",
      "pickup_sproutingEgg_viewed"
    ]
  },
  "headstompers": {
    "itemName": "Headstompers",
    "pickupText": "Hurt enemies by falling.",
    "fullDescription": "Hurt enemies by falling for up to <yellow>600%</yellow> <gray>(+300% per stack) </gray><green>damage</green>.",
    "category": "Damage",
    "achievement": [
      "pickup_headstompers_got",
      "pickup_headstompers_viewed"
    ]
  },
  "lifeSavings": {
    "itemName": "Life Savings",
    "pickupText": "Gain gold over time.",
    "fullDescription": "Generate <yellow>$1</yellow> <gray>(+$1 per stack)</gray> every 3 seconds. Scales with time.",
    "category": "Utility",
    "achievement": [
      "pickup_lifeSavings_got",
      "pickup_lifeSavings_viewed"
    ]
  },
  "barbedWire": {
    "itemName": "Barbed Wire",
    "pickupText": "Hurts nearby enemies.",
    "fullDescription": "Hurt <yellow>1</yellow> enemy within <yellow>1m</yellow> <gray>(+0.2m per stack)</gray> for <green>50%</green> <gray>(+10% per stack) </gray><green>damage</green> every <yellow>0.5</yellow> seconds.",
    "category": "Damage",
    "achievement": [
      "pickup_barbedWire_got",
      "pickup_barbedWire_viewed"
    ]
  },
  "rustyKnife": {
    "itemName": "Rusty Knife",
    "pickupText": "Chance to bleed on hit.",
    "fullDescription": "<yellow>15%</yellow> <gray>(+15% per stack) </gray><green>chance to bleed</green> an enemy for <yellow>4x35% TOTAL damage</yellow>.",
    "category": "Damage",
    "achievement": [
      "pickup_rustyKnife_got",
      "pickup_rustyKnife_viewed"
    ]
  },
  "mysteriousVial": {
    "itemName": "Mysterious Vial",
    "pickupText": "Increased health regeneration.",
    "fullDescription": "Increase <green>health regeneration</green> by <green>0.84</green> <gray>(+0.84 per stack) </gray><green>hp</green> per second.",
    "category": "Health",
    "achievement": [
      "pickup_mysteriousVial_got",
      "pickup_mysteriousVial_viewed"
    ]
  },
  "mortarTube": {
    "itemName": "Mortar Tube",
    "pickupText": "Chance to launch a mortar.",
    "fullDescription": "<yellow>9%</yellow> chance on hit to fire a mortar for <yellow>170%</yellow> <gray>(+170% per stack) </gray><green>TOTAL damage</green>.",
    "category": "Damage",
    "achievement": [
      "pickup_mortarTube_got",
      "pickup_mortarTube_viewed"
    ]
  },
  "warbanner": {
    "itemName": "Warbanner",
    "pickupText": "Drop a Warbanner on level up or activating the teleporter, giving you great strength.",
    "fullDescription": "On <blue>level up</blue> or <blue>activating the Teleporter</blue>, drop a banner that strengthens all allies within <yellow>4.6m</yellow> <gray>(+1.4m per stack)</gray>. Raise <green>attack</green> and <blue>movement</blue> speed by <yellow>30%</yellow> and damage by <yellow>4</yellow>. Also <green>heals</green> for <green>1%</green> of your <green>health</green> every second.",
    "category": "Utility",
    "achievement": [
      "pickup_warbanner_got",
      "pickup_warbanner_viewed"
    ]
  },
  "monsterTooth": {
    "itemName": "Monster Tooth",
    "pickupText": "Heal after kills.",
    "fullDescription": "Killing an enemy heals you for <green>10</green> <gray>(+5 per stack) </gray><green>health</green>.",
    "category": "Health",
    "achievement": [
      "pickup_monsterTooth_got",
      "pickup_monsterTooth_viewed"
    ]
  },
  "soldiersSyringe": {
    "itemName": "Soldier's Syringe",
    "pickupText": "Increases attack speed.",
    "fullDescription": "Increases <yellow>attack speed</yellow> by <yellow>12%</yellow> <gray>(+12% per stack)</gray>.",
    "category": "Utility",
    "achievement": [
      "pickup_soldiersSyringe_got",
      "pickup_soldiersSyringe_viewed"
    ]
  },
  "crowbar": {
    "itemName": "Crowbar",
    "pickupText": "Deal bonus damage to healthy monsters.",
    "fullDescription": "Deal <yellow>+50%</yellow> <gray>(+30% per stack) </gray><green>damage</green> to enemies above <yellow>80% health</yellow>.",
    "category": "Damage",
    "achievement": [
      "pickup_crowbar_got",
      "pickup_crowbar_viewed"
    ]
  },
  "medkit": {
    "itemName": "Medkit",
    "pickupText": "Receive a delayed heal after taking damage.",
    "fullDescription": "<green>Heal</green> for <green>10</green> <gray>(+10 per stack) </gray><green>health</green> <blue>1.5 seconds</blue> after getting hurt.",
    "category": "Health",
    "achievement": [
      "pickup_medkit_got",
      "pickup_medkit_viewed"
    ]
  },
  "bundleOfFireworks": {
    "itemName": "Bundle of Fireworks",
    "pickupText": "Activating an interactable launches fireworks at nearby enemies.",
    "fullDescription": "Activating an interactable <yellow>launches 6</yellow> <gray>(+3 per stack) </gray><green>fireworks</green> that deal <yellow>300% base damage</yellow>.",
    "category": "Damage",
    "achievement": [
      "pickup_bundleOfFireworks_got",
      "pickup_bundleOfFireworks_viewed"
    ]
  },
  "backupMagazine": {
    "itemName": "Backup Magazine",
    "pickupText": "Add an extra charge of your Secondary skill.",
    "fullDescription": "Add <blue>+1</blue> <gray>(+1 per stack)</gray> charge of your <green>Secondary skill</green>.",
    "category": "Utility",
    "achievement": [
      "pickup_backupMagazine_got",
      "pickup_backupMagazine_viewed"
    ]
  },
  "topazBrooch": {
    "itemName": "Topaz Brooch",
    "pickupText": "Kills grant temporary barrier.",
    "fullDescription": "Killing an enemy grants <green>15 barrier</green> <gray>(+15 per stack)</gray>.",
    "category": "Health",
    "achievement": [
      "pickup_topazBrooch_got",
      "pickup_topazBrooch_viewed"
    ]
  },
  "taser": {
    "itemName": "Taser",
    "pickupText": "Chance to snare on hit.",
    "fullDescription": "<yellow>7%</yellow> chance on hit to <yellow>snare</yellow> enemies for <yellow>1.5</yellow> <gray>(+0.5 per stack) </gray><green>seconds</green>.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_taser_viewed",
      "challenge_unlock_taser_completed"
    ],
    "achievement": [
      "pickup_taser_got",
      "pickup_taser_viewed"
    ]
  },
  "paulsGoatHoof": {
    "itemName": "Paul's Goat Hoof",
    "pickupText": "Move faster.",
    "fullDescription": "Increases <yellow>movement speed</yellow> by <blue>15%</blue> <gray>(+15% per stack)</gray>.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_hoof_completed",
      "challenge_unlock_hoof_viewed"
    ],
    "achievement": [
      "pickup_paulsGoatHoof_got",
      "pickup_paulsGoatHoof_viewed"
    ]
  },
  "bitterRoot": {
    "itemName": "Bitter Root",
    "pickupText": "Increases maximum health by 8%.",
    "fullDescription": "Increases <green>maximum health</green> by <green>8%</green> <gray>(+8% per stack)</gray>.",
    "category": "Health",
    "unlock": [
      "challenge_unlock_root_viewed",
      "challenge_unlock_root_completed"
    ],
    "achievement": [
      "pickup_bitterRoot_got",
      "pickup_bitterRoot_viewed"
    ]
  },
  "stickyBomb": {
    "itemName": "Sticky Bomb",
    "pickupText": "Chance to attach a bomb to enemies.",
    "fullDescription": "<yellow>9%</yellow> chance on hit to attach a <yellow>bomb</yellow> to an enemy, detonating for <yellow>140%</yellow> <gray>(+140% per stack) </gray><green>TOTAL damage</green>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_sticky_bomb_viewed",
      "challenge_unlock_sticky_bomb_completed"
    ],
    "achievement": [
      "pickup_stickyBomb_got",
      "pickup_stickyBomb_viewed"
    ]
  },
  "snakeEyes": {
    "itemName": "Snake Eyes",
    "pickupText": "Gain increased critical strike chance on failing a shrine. Resets between stages.",
    "fullDescription": "<blue>Failing a shrine</blue> increases <yellow>critical chance</yellow> by <yellow>7%</yellow> <gray>(+7% per stack)</gray>, up to <green>6 times</green>. Resets at the start of each stage.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_snake_eyes_viewed",
      "challenge_unlock_snake_eyes_completed"
    ],
    "achievement": [
      "pickup_snakeEyes_got",
      "pickup_snakeEyes_viewed"
    ]
  },
  "scarf": {
    "itemName": "Hermitsscarf",
    "pickupText": "Chance to evade incoming damage.",
    "fullDescription": "<green>10%</green> <gray>(+10% per stack)</gray> chance to <green>evade</green> incoming damage.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_scarf_viewed",
      "challenge_unlock_scarf_completed"
    ],
    "achievement": [
      "pickup_hermitsScarf_got",
      "pickup_hermitsScarf_viewed"
    ]
  },
  "gasoline": {
    "itemName": "Gasoline",
    "pickupText": "Killing enemies sets the ground on fire.",
    "fullDescription": "Killing enemies burns the ground for <yellow>60%</yellow> <gray>(+40% per stack) </gray><green>damage</green>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_gasoline_viewed",
      "challenge_unlock_gasoline_completed"
    ],
    "achievement": [
      "pickup_gasoline_got",
      "pickup_gasoline_viewed"
    ]
  },
  "spikestrip": {
    "itemName": "Spikestrip",
    "pickupText": "Drop spikestrips on being hit, snaring enemies.",
    "fullDescription": "When hit, drop spikestrips that <yellow>snare</yellow> enemies for <yellow>1</yellow> <gray>(+0.5 per stack) </gray><green>second</green>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_spikestrip_viewed",
      "challenge_unlock_spikestrip_completed"
    ],
    "achievement": [
      "pickup_spikestrip_got",
      "pickup_spikestrip_viewed"
    ]
  },
  "mocha": {
    "itemName": "Mocha",
    "pickupText": "Slightly increase attack speed and movement speed.",
    "fullDescription": "Increases <yellow>movement speed</yellow> by <blue>7.5%</blue> <gray>(+7.5% per stack)</gray> and <green>attack speed</green> by <yellow>6%</yellow> <gray>(+6% per stack)</gray>.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_mocha_viewed",
      "challenge_unlock_mocha_completed"
    ],
    "achievement": [
      "pickup_mocha_got",
      "pickup_mocha_viewed"
    ]
  },
  "voltaicmitt": {
    "itemName": "Voltaic Mitt",
    "pickupText": "Climbed ropes are electrified.",
    "fullDescription": "Climbing creates an <yellow>electric trail</yellow> that deals <yellow>50% damage</yellow> <gray>(+30% per stack)</gray>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_voltaic_mitt_viewed",
      "challenge_unlock_voltaic_mitt_completed"
    ],
    "achievement": [
      "pickup_voltaicMitt_got",
      "pickup_voltaicMitt_viewed"
    ]
  },
  "theToxin": {
    "itemName": "The Toxin",
    "pickupText": "Touch enemies to weaken them.",
    "fullDescription": "<gray>Infect</gray> enemies on contact for <yellow>3</yellow> seconds, causing them to receive <yellow>30%</yellow> <gray>(+15% per stack) </gray><green>extra damage</green> from all sources.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_toxin_viewed",
      "challenge_unlock_toxin_completed"
    ],
    "achievement": [
      "pickup_theToxin_got",
      "pickup_theToxin_viewed"
    ]
  },
  "muConstruct": {
    "itemName": "Mu Construct",
    "pickupText": "Heal periodically after activating the teleporter.",
    "fullDescription": "Heal by <green>2.5% of your maximum health</green> every <yellow>5</yellow> <gray>(-25% per stack) </gray><green>seconds</green> <gray>after the Teleporter has been activated.</gray>",
    "category": "Health",
    "unlock": [
      "challenge_unlock_construct_viewed",
      "challenge_unlock_construct_completed"
    ],
    "achievement": [
      "pickup_muConstruct_got",
      "pickup_muConstruct_viewed"
    ]
  },
  "razorPenny": {
    "itemName": "Razor Penny",
    "pickupText": "Slightly increased Critical strike chance. Critical strikes give you gold.",
    "fullDescription": "Gain <yellow>3% critical chance</yellow> <gray>(+3% per stack)</gray>. <green>Critical strikes drop $1</green> <gray>(+1$ per stack)</gray><green> gold</green>.",
    "category": "?",
    "unlock": [
      "challenge_unlock_razor_penny_viewed",
      "challenge_unlock_razor_penny_completed"
    ],
    "achievement": [
      "pickup_razorPenny_got",
      "pickup_razorPenny_viewed"
    ]
  },
  "arcaneBlades": {
    "itemName": "Arcane Blades",
    "pickupText": "Move faster after activating the Teleporter.",
    "fullDescription": "Increases <yellow>movement speed</yellow> by <blue>30%</blue> <gray>(+30% per stack)</gray> <green>after the Teleporter has been activated.</green>",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_arcane_blades_viewed",
      "challenge_unlock_arcane_blades_completed"
    ],
    "achievement": [
      "pickup_arcaneBlades_got",
      "pickup_arcaneBlades_viewed"
    ]
  },
  "timekeepersSecret": {
    "itemName": "Timekeeper's Secret",
    "pickupText": "Falling to low health stops time.",
    "fullDescription": "Falling below <gray>25% health</gray> stops time for <yellow>3</yellow> <gray>(+1 per stack) </gray><green>seconds</green>. Recharges after <blue>7 minutes</blue>.",
    "category": "Utility",
    "achievement": [
      "pickup_timeKeepersSecret_got",
      "pickup_timeKeepersSecret_viewed"
    ]
  },
  "smartshopper": {
    "itemName": "Smartshopper",
    "pickupText": "Enemies drop extra gold.",
    "fullDescription": "Killed enemies drop <yellow>25%</yellow> <gray>(+25% per stack) </gray><green>more gold</green>.",
    "category": "Utility",
    "achievement": [
      "pickup_smartShopper_got",
      "pickup_smartShopper_viewed"
    ]
  },
  "infusion": {
    "itemName": "Infusion",
    "pickupText": "Killing an enemy permanently increases your health.",
    "fullDescription": "Killing an enemy increases your <green>health permanently</green> by <green>1</green> <gray>(+0.5 per stack)</gray>.",
    "category": "Health",
    "achievement": [
      "pickup_infusion_got",
      "pickup_infusion_viewed"
    ]
  },
  "willOTheWisp": {
    "itemName": "Will-O'-the-Wisp",
    "pickupText": "Chance to detonate enemies on kill.",
    "fullDescription": "<yellow>33%</yellow> chance on killing an enemy to create a <yellow>lava pillar</yellow> for <yellow>300%</yellow> <gray>(+200% per stack) </gray><green>damage</green>, <blue>knocking enemies upwards</blue>.",
    "category": "Damage",
    "achievement": [
      "pickup_willOTheWisp_got",
      "pickup_willOTheWisp_viewed"
    ]
  },
  "atgMissileMk1": {
    "itemName": "ATG Missile MK-1",
    "pickupText": "Chance to fire a missile.",
    "fullDescription": "<yellow>10%</yellow> <gray>(+10% per stack)</gray> chance on hit to fire a missile that deals <green>300% TOTAL damage</green>.",
    "category": "Damage",
    "achievement": [
      "pickup_atgMissileMk1_got",
      "pickup_atgMissileMk1_viewed"
    ]
  },
  "toughTimes": {
    "itemName": "Tough Times",
    "pickupText": "Reduce incoming damage by 14%.",
    "fullDescription": "<green>Increase armor</green> by <green>14</green> <gray>(+14 per stack)</gray>.",
    "category": "Utility",
    "achievement": [
      "pickup_toughTimes_got",
      "pickup_toughTimes_viewed"
    ]
  },
  "energyCell": {
    "itemName": "Energy Cell",
    "pickupText": "Attack faster at lower health.",
    "fullDescription": "Increases <yellow>attack speed</yellow> by up to <yellow>40%</yellow> <gray>(+30% per stack)</gray> at <green>low health</green>.",
    "category": "Utility",
    "achievement": [
      "pickup_energyCell_got",
      "pickup_energyCell_viewed"
    ]
  },
  "rustyJetpack": {
    "itemName": "Rusty Jetpack",
    "pickupText": "Increase jump height and reduce gravity.",
    "fullDescription": "Decrease <blue>gravity</blue> while holding the jump button by <blue>10%</blue> <gray>(-10% per stack)</gray> and increase <green>jump height</green> <gray>(increases per stack)</gray>.",
    "category": "Utility",
    "achievement": [
      "pickup_rustyJetpack_got",
      "pickup_rustyJetpack_viewed"
    ]
  },
  "leechingSeed": {
    "itemName": "Leeching Seed",
    "pickupText": "Attacking enemies heals you.",
    "fullDescription": "Attacking enemies heals you for <green>2</green> <gray>(+1 per stack) </gray><green>health</green>.",
    "category": "Health",
    "unlock": [
      "challenge,_unlock_leech_viewed",
      "challenge_unlock_leech_completed"
    ],
    "achievement": [
      "pickup_leechingSeed_got",
      "pickup_leechingSeed_viewed"
    ]
  },
  "ukulele": {
    "itemName": "Ukulele",
    "pickupText": "..and his music was electric.",
    "fullDescription": "<yellow>20% chance</yellow> on hit to fire <yellow>chain lightning</yellow> for <yellow>66%</yellow> <gray>(+66% per stack) </gray><green>TOTAL damage</green> on up to <yellow>3</yellow> targets.",
    "category": "Damage",
    "achievement": [
      "pickup_ukulele_got",
      "pickup_ukulele_viewed"
    ]
  },
  "boxingGloves": {
    "itemName": "Boxing Gloves",
    "pickupText": "Chance to knock enemies backwards for extra damage.",
    "fullDescription": "<yellow>6%</yellow> <gray>(+6% per stack)</gray> chance on hitting enemies to <green>knock them back</green> for <yellow>100% TOTAL damage</yellow>.",
    "category": "Utility",
    "achievement": [
      "pickup_boxingGloves_got",
      "pickup_boxingGloves_viewed"
    ]
  },
  "prisonShackles": {
    "itemName": "Prison Shackles",
    "pickupText": "Slow enemies on attack.",
    "fullDescription": "<blue>Slow</blue> enemies on hit for <blue>-50% movement speed</blue> for <yellow>1.5</yellow> <gray>(+0.5 per stack) </gray><green>seconds</green>.",
    "category": "Utility",
    "achievement": [
      "pickup_prisonShackles_got",
      "pickup_prisonShackles_viewed"
    ]
  },
  "guardiansHeart": {
    "itemName": "Guardian's Heart",
    "pickupText": "Gain a shield. Recharges outside of danger.",
    "fullDescription": "Gain a <blue>60</blue> <gray>(+60 per stack) </gray><green>health shield</green>. Recharges when outside of danger for <blue>7</blue> seconds.",
    "category": "Health",
    "achievement": [
      "pickup_guardiansHeart_got",
      "pickup_guardiansHeart_viewed"
    ]
  },
  "Hopoofeather": {
    "itemName": "Hopoofeather",
    "pickupText": "Gain an extra jump.",
    "fullDescription": "Gain <blue>+1</blue> <gray>(+1 per stack)</gray> maximum <green>jump count</green>.",
    "category": "Utility",
    "achievement": [
      "pickup_hopooFeather_got",
      "pickup_hopooFeather_viewed"
    ]
  },
  "frostRelic": {
    "itemName": "Frost Relic",
    "pickupText": "Killing enemies surrounds you with icicles.",
    "fullDescription": "Killing an enemy temporarily surrounds you with <yellow>3</yellow> <gray>(+1 per stack) </gray><green>icicles</green> that deal <yellow>33% damage each</yellow> every <yellow>0.33</yellow> seconds.",
    "category": "Damage",
    "achievement": [
      "pickup_frostRelic_got",
      "pickup_frostRelic_viewed"
    ]
  },
  "redWhip": {
    "itemName": "Red Whip",
    "pickupText": "Move fast out of combat.",
    "fullDescription": "Leaving combat for <yellow>2</yellow> seconds boosts your <blue>movement speed</blue> by <blue>60%</blue> <gray>(+60% per stack)</gray>.",
    "category": "Utility",
    "achievement": [
      "pickup_redWhip_got",
      "pickup_redWhip_viewed"
    ]
  },
  "chargefieldGenerator": {
    "itemName": "Chargefield Generator",
    "pickupText": "Create a ring of lightning after killing an enemy. Lasts 6 seconds.",
    "fullDescription": "Killing an enemy creates a <yellow>ring of lightning</yellow> that deals <yellow>50%</yellow> <gray>(+20% per stack) </gray><green>damage</green> every <yellow>0.5</yellow> seconds to <blue>50%</blue> of enemies within. The ring starts with a radius of <yellow>4.7m</yellow> and <yellow>grows by 1.3m each kill</yellow> up to <yellow>40m</yellow>. Lasts for <yellow>6</yellow> seconds without killing enemies.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_chargefield_completed",
      "challenge_unlock_chargefield_viewed"
    ],
    "achievement": [
      "pickup_chargefieldGenerator_got",
      "pickup_chargefieldGenerator_viewed"
    ]
  },
  "armsrace": {
    "itemName": "Armsrace",
    "pickupText": "Drones are equipped with explosive weaponry. Summons a drone helper.",
    "fullDescription": "Drones gain a <yellow>5%</yellow> <gray>(+5% per stack)</gray> chance on hit to fire a missile for <green>300% TOTAL damage</green>, and a <yellow>9%</yellow> chance on hit to fire a mortar for <yellow>85%</yellow> <gray>(+85% per stack) </gray><green>TOTAL damage</green>. <blue>Summons a unique drone</blue> which regenerates each stage.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_armsrace_completed",
      "challenge_unlock_armsrace_viewed"
    ],
    "achievement": [
      "pickup_armsRace_got",
      "pickup_armsRace_viewed"
    ]
  },
  "goldenGun": {
    "itemName": "Golden Gun",
    "pickupText": "More gold, more damage.",
    "fullDescription": "Deal <yellow>bonus damage</yellow> based on <yellow>current gold</yellow>, up to <yellow>40% damage</yellow>. Caps at <yellow>700</yellow> <gray>(-50% per stack) </gray><green>gold</green>. Scales with time.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_golden_gun_viewed",
      "challenge_unlock_golden_gun_completed"
    ],
    "achievement": [
      "pickup_goldenGun_got",
      "pickup_goldenGun_viewed"
    ]
  },
  "56LeafClover": {
    "itemName": "56 Leaf Clover",
    "pickupText": "Elite mobs have a chance to drop items.",
    "fullDescription": "Elite mobs have a <blue>4%</blue> <gray>(+1.5% per stack) </gray><green>chance</green> to <blue>drop items</blue>.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_clover_completed",
      "challenge_unlock_clover_viewed"
    ],
    "achievement": [
      "pickup_56LeafClover_got",
      "pickup_56LeafClover_viewed"
    ]
  },
  "concussionGrenade": {
    "itemName": "Concussion Grenade",
    "pickupText": "Chance to stun enemies.",
    "fullDescription": "<yellow>6%</yellow> <gray>(+6% per stack)</gray> chance on hitting enemies to <green>stun</green> them for <yellow>2</yellow> seconds.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_concussion_completed",
      "challenge_unlock_concussion_viewed"
    ],
    "achievement": [
      "pickup_concussionGrenade_got",
      "pickup_concussionGrenade_viewed"
    ]
  },
  "filialImprinting": {
    "itemName": "Filial Imprinting",
    "pickupText": "Hatch a strange creature who drops buffs periodically.",
    "fullDescription": "Hatch <blue>1</blue> <gray>(+1 per stack)</gray> strange creature who drops <green>buffs</green> every <yellow>20</yellow> seconds. Buffs temporarily boost either <blue>movement speed</blue>, <yellow>attack speed</yellow>, or <green>health regen</green>.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_imprinting_completed",
      "challenge_unlock_imprinting_viewed"
    ],
    "achievement": [
      "pickup_filialImprinting_got",
      "pickup_filialImprinting_viewed"
    ]
  },
  "deadmansFoot": {
    "itemName": "Deadman's Foot",
    "pickupText": "Drop a poison trap at low health.",
    "fullDescription": "Chance when damaged to drop a <yellow>poison mine</yellow> that deals <yellow>150% damage</yellow> and poisons for <yellow>x600%</yellow> <gray>(+450% per stack) </gray><green>damage</green> over time. Chance to drop starts at <yellow>15%</yellow> and increases with <gray>low health</gray>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_foot_completed",
      "challenge_unlock_foot_viewed"
    ],
    "achievement": [
      "pickup_deadMansFoot_got",
      "pickup_deadMansFoot_viewed"
    ]
  },
  "toxicCentipede": {
    "itemName": "Toxic Centipede",
    "pickupText": "Infected!",
    "fullDescription": "<gray>Infect</gray> a nearby enemy on contact for <yellow>6</yellow> <gray>(+2 per stack) </gray><green>seconds</green>, dealing <yellow>50% damage</yellow> every <yellow>0.5</yellow> seconds. Bounces to other enemies if the target dies. Recharges every <blue>6</blue> <gray>(-33% per stack) </gray><green>seconds</green>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_centipede_completed",
      "challenge_unlock_centipede_viewed"
    ],
    "achievement": [
      "pickup_toxicCentipede_got",
      "pickup_toxicCentipede_viewed"
    ]
  },
  "harvestersScythe": {
    "itemName": "Harvester's Scythe",
    "pickupText": "Critical hits heal you.",
    "fullDescription": "Gain <yellow>5% critical chance</yellow>. <yellow>Critical strikes</yellow> <green>heal</green> for <yellow>8</yellow> <gray>(+2 per stack) </gray><green>health</green>.",
    "category": "Health",
    "unlock": [
      "challenge_unlock_scythe_completed",
      "challenge_unlock_scythe_viewed"
    ],
    "achievement": [
      "pickup_harvestersScythe_got",
      "pickup_harvestersScythe_viewed"
    ]
  },
  "panicMines": {
    "itemName": "Panic Mines",
    "pickupText": "Drop a mine at low health.",
    "fullDescription": "Chance when damaged to drop <yellow>1</yellow> <gray>(+1 per stack) </gray><green>mine</green> that deals <yellow>400% damage</yellow>. Chance to drop starts at <yellow>15%</yellow> and increases with <gray>low health</gray>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_panic_mine_completed",
      "challenge_unlock_panic_mine_viewed"
    ],
    "achievement": [
      "pickup_panicMines_got",
      "pickup_panicMines_viewed"
    ]
  },
  "predatoryInstincts": {
    "itemName": "Predatory Instincts",
    "pickupText": "Critical strikes increase attack speed. Buff stacks 5 times.",
    "fullDescription": "Gain <yellow>5% critical chance</yellow>. <yellow>Critical strikes</yellow> increase <yellow>attack speed</yellow> by <yellow>10%</yellow> <gray>(+7% per stack)</gray>. Maximum cap of <green>30%</green> <gray>(+21% per stack) </gray><green>attack speed</green>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_instincts_completed",
      "challenge_unlock_instincts_viewed"
    ],
    "achievement": [
      "pickup_predatoryInstincts_got",
      "pickup_predatoryInstincts_viewed"
    ]
  },
  "royalMedallion": {
    "itemName": "Royal Medallion",
    "pickupText": "Bosses drop powerful buffing wisps when hit.",
    "fullDescription": "<yellow>10%</yellow> chance on hitting a boss monster to <blue>drop a buffing wisp</blue> that <yellow>improves health regen, attack speed, move speed, and base damage</yellow> for <yellow>10</yellow> <gray>(+6 per stack) seconds</gray>.",
    "category": "Utility?",
    "unlock": [
      "challenge_unlock_medallion_completed",
      "challenge_unlock_medallion_viewed"
    ],
    "achievement": [
      "pickup_royalMedallion_got",
      "pickup_royalMedallion_viewed"
    ]
  },
  "prophetsCape": {
    "itemName": "Prophet's Cape",
    "pickupText": "All blocked damage heals you.",
    "fullDescription": "<yellow>Briefly blocks all incoming damage upon being struck</yellow> <gray>(Recharging after 15 seconds)</gray>. Blocking damage heals you for <green>3</green> <gray>(+1 per stack)</gray><green> health</green>.",
    "category": "Utility? Health?",
    "unlock": [
      "challenge_unlock_cape_completed",
      "challenge_unlock_cape_viewed"
    ],
    "achievement": [
      "pickup_prophetsCape_got",
      "pickup_prophetsCape_viewed"
    ]
  },
  "lockedJewel": {
    "itemName": "Locked Jewel",
    "pickupText": "Activating an interactable grants barrier and gold.",
    "fullDescription": "Activating an interactable heals <green>35%</green> <gray>(+15% per stack)</gray> of your <green>maximum barrier</green> and grants <yellow>$8 (scales with time)</yellow>.",
    "category": "Health",
    "unlock": [
      "challenge_unlock_locked_jewel_completed",
      "challenge_unlock_locked_jewel_completed"
    ],
    "achievement": [
      "pickup_lockedJewel_got",
      "pickup_lockedJewel_viewed"
    ]
  },
  "huntersHarpoon": {
    "itemName": "Hunter's Harpoon",
    "pickupText": "Killing an enemy grants a temporary burst of speed.",
    "fullDescription": "Killing an enemy increases <yellow>movement speed</yellow> by <yellow>125%</yellow> for <yellow>1</yellow> <gray>(+1 per stack) </gray><green>second</green>. <blue>Consecutive kills increase buff duration</blue> for up to 25 seconds.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_hunters_harpoon_completed",
      "challenge_unlock_hunters_harpoon_viewed"
    ],
    "achievement": [
      "pickup_huntersHarpoon_got",
      "pickup_huntersHarpoon_got"
    ]
  },
  "insecticide": {
    "itemName": "Insecticide",
    "pickupText": "Chance to apply damage over time. Heal if the enemy dies.",
    "fullDescription": "<yellow>10%</yellow> <gray>(+5% per stack)</gray> chance on hit to <yellow>spray</yellow> an enemy dealing <yellow>10% damage per second</yellow>. <yellow>Spray</yellow> stacks up to 10 times. Killing enemies <green>heals</green> for <green>10</green> <gray>(+5 per stack)</gray> <green>health</green> per stack of <yellow>spray</yellow>.",
    "category": "Damage? Health?",
    "unlock": [
      "challenge_unlock_insecticide_completed",
      "challenge_unlock_insecticide_viewed"
    ],
    "achievement": [
      "pickup_insecticide_got",
      "pickup_insecticide_viewed"
    ]
  },
  "decayingSample": {
    "itemName": "Decaying Sample",
    "pickupText": "Gain an orbiting follower that damages enemies.",
    "fullDescription": "<blue>Gain two orbiting spheres</blue> that strike for <yellow>100%</yellow> <gray>(+ 50% stack)</gray> <yellow>damage</yellow> every <yellow>0.25</yellow> seconds.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_orbiter_completed",
      "challenge_unlock_orbiter_viewed"
    ],
    "achievement": [
      "pickup_orbiter_got",
      "pickup_orbiter_viewed"
    ]
  },
  "thallium": {
    "itemName": "Thallium",
    "pickupText": "Chance to slow and damage enemies over time.",
    "fullDescription": "<yellow>10%</yellow> <gray>(+10% per stack)</gray> chance on hit to damage by up to <green>2x500% enemy damage per second</green> and slow for up to <blue>-150% movement speed</blue> over the course of <yellow>3 seconds</yellow>.",
    "category": "Damage",
    "achievement": [
      "pickup_thallium_got",
      "pickup_thallium_viewed"
    ]
  },
  "teslaCoil": {
    "itemName": "Tesla Coil",
    "pickupText": "Passively shock nearby enemies.",
    "fullDescription": "Passively <yellow>shock</yellow> nearby enemies for <yellow>120%</yellow> <gray>(+60% per stack) </gray><green>damage</green>.",
    "category": "Damage",
    "achievement": [
      "pickup_teslaCoil_got",
      "pickup_teslaCoil_viewed"
    ]
  },
  "oldBox": {
    "itemName": "Old Box",
    "pickupText": "Chance when damaged to drop a jack-in-the-box, fearing enemies.",
    "fullDescription": "Chance when damaged to drop a <yellow>jack-in-the-box</yellow>, <gray>fearing enemies</gray> for <yellow>2</yellow> <gray>(+1 per stack) </gray><green>seconds</green>. Chance to drop starts at <yellow>10%</yellow> and increases with <gray>low health</gray>.",
    "category": "Utility",
    "achievement": [
      "pickup_oldBox_got",
      "pickup_oldBox_viewed"
    ]
  },
  "beatingEmbryo": {
    "itemName": "Beating Embryo",
    "pickupText": "Equipment has a chance to deal double the effect.",
    "fullDescription": "Equipment has a <yellow>30%</yellow> <gray>(+30% per stack) </gray><green>chance</green> to deal <yellow>double</yellow> the effect.",
    "category": "Utility",
    "achievement": [
      "pickup_beatingEmbryo_got",
      "pickup_beatingEmbryo_viewed"
    ]
  },
  "permafrost": {
    "itemName": "Permafrost",
    "pickupText": "Chance on hit to freeze enemies while also slowing.",
    "fullDescription": "<yellow>13%</yellow> chance on hit to <yellow>freeze enemies for 1.5 seconds</yellow> while slowing by <blue>-80% movement speed</blue> for <blue>3</blue> <gray>(+1.5 per stack) </gray><green>seconds</green>.",
    "category": "Utility",
    "achievement": [
      "pickup_permafrost_got",
      "pickup_permafrost_viewed"
    ]
  },
  "atgMissileMk2": {
    "itemName": "ATG Missile MK-2",
    "pickupText": "Hooah.",
    "fullDescription": "<yellow>7%</yellow> <gray>(+7% per stack)</gray> chance on hit to fire three missiles that deal <green>3x300% TOTAL damage</green>.",
    "category": "Damage",
    "achievement": [
      "pickup_atgMissileMk2_got",
      "pickup_atgMissileMk2_viewed"
    ]
  },
  "happiestMask": {
    "itemName": "Happiest Mask",
    "pickupText": "Killed enemies spawn friendly ghosts.",
    "fullDescription": "Killed enemies spawn <blue>ghosts</blue> that last <blue>15 seconds</blue> with <blue>100%</blue> <gray>(+20% per stack) </gray><green>health</green> and <blue>70%</blue> <gray>(+30% per stack) </gray><green>damage</green>.",
    "category": "Damage?",
    "achievement": [
      "pickup_happiestMask_got",
      "pickup_happiestMask_viewed"
    ]
  },
  "plasmaChain": {
    "itemName": "Plasma Chain",
    "pickupText": "Chance on hit to tether onto up to 1 enemy, dealing damage to any enemies in the path.",
    "fullDescription": "Chance on hit to <yellow>tether</yellow> onto up to <blue>1</blue> <gray>(+1 per stack)</gray> enemy dealing <green>60% damage per 0.5 seconds</green> to any enemies in the path.",
    "category": "Damage",
    "achievement": [
      "pickup_plasmaChain_got",
      "pickup_plasmaChain_viewed"
    ]
  },
  "heavenCracker": {
    "itemName": "Heaven Cracker",
    "pickupText": "Every 4 basic attacks pierce through enemies.",
    "fullDescription": "Every <blue>4</blue> <gray>(-1 per stack) </gray><green>basic attacks</green> <yellow>pierce through enemies</yellow>.",
    "category": "Utility? Damage?",
    "achievement": [
      "pickup_heavenCracker_got",
      "pickup_heavenCracker_viewed"
    ]
  },
  "rapidMitosis": {
    "itemName": "Rapid Mitosis",
    "pickupText": "Reduce the cooldown of equipment.",
    "fullDescription": "Reduce the <blue>cooldown of equipment</blue> by <blue>25%</blue> <gray>(+25% per stack)</gray>.",
    "category": "Utility",
    "achievement": [
      "pickup_rapidMitosis_got",
      "pickup_rapidMitosis_viewed"
    ]
  },
  "ceremonialDagger": {
    "itemName": "Ceremonialdagger",
    "pickupText": "Killing an enemy fires spirit bolts.",
    "fullDescription": "Killing an enemy fires out <blue>4</blue> <gray>(+2 per stack) </gray><green>heat seaking bolts</green> that deal <yellow>100% damage</yellow>.",
    "category": "Damage",
    "achievement": [
      "pickup_ceremonialDagger_got",
      "pickup_ceremonialDagger_viewed"
    ]
  },
  "repulsionArmor": {
    "itemName": "Repulsion Armor",
    "pickupText": "After taking damage, reflect all attacks for 4 seconds.",
    "fullDescription": "After <yellow>6</yellow> hits <blue>reflect incoming attacks</blue> for <yellow>400% damage</yellow> and <green>increase armor</green> by <green>100</green> for <yellow>4</yellow> <gray>(+1 per stack) </gray><yellow>seconds</yellow>.",
    "category": "Health",
    "achievement": [
      "pickup_repulsionArmor_got",
      "pickup_repulsionArmor_viewed"
    ]
  },
  "brilliantBehemoth": {
    "itemName": "Brilliant Behemoth",
    "pickupText": "All your attacks explode!",
    "fullDescription": "All your <yellow>attacks explode</yellow> for a bonus <yellow>20%</yellow> <gray>(+20% per stack) </gray><green>TOTAL damage</green> to nearby enemies.",
    "category": "Damage",
    "achievement": [
      "pickup_brilliantBehemoth_got",
      "pickup_brilliantBehemoth_viewed"
    ]
  },
  "hardlightAfterburner": {
    "itemName": "Hardlight Afterburner",
    "pickupText": "Add 2 extra charges of your Utility skill. Reduce Utility skill cooldown.",
    "fullDescription": "Add <blue>+2</blue> <gray>(+2 per stack)</gray> charges of your <green>Utility skill</green>. Reduces <blue>Utility skill cooldown</blue> by <blue>33%</blue>.",
    "category": "Utility",
    "achievement": [
      "pickup_hardlightAfterburner_got",
      "pickup_hardlightAfterburner_viewed"
    ]
  },
  "interstellarDeskplant": {
    "itemName": "Interstellar Deskplant",
    "pickupText": "Sprout a tree on kill, granting healing fruits.",
    "fullDescription": "Upon killing an enemy, spawn an <blue>alien plant</blue> that heals you for <green>3% of your maximum health</green> and <blue>recharges</blue> after <yellow>4 seconds</yellow>. Plant lasts <yellow>15</yellow> <gray>(+5 per stack)</gray> <yellow>seconds</yellow>.",
    "category": "Healing",
    "unlock": [
      "challenge_unlock_interstellar_completed",
      "challenge_unlock_interstellar_viewed"
    ],
    "achievement": [
      "pickup_interstellarDeskPlant_got",
      "pickup_interstellarDeskPlant_viewed"
    ]
  },
  "laserTurbine": {
    "itemName": "Laser Turbine",
    "pickupText": "Using skills charges up to a huge laser blast.",
    "fullDescription": "Using <blue>skills</blue> charges the generator by <yellow>7.8%</yellow> <gray>(+7.8% per stack) </gray><green>per second</green>. At full power, fire a laser for <yellow>2000% damage</yellow>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_turbine_completed",
      "challenge_unlock_turbine_viewed"
    ],
    "achievement": [
      "pickup_laserTurbine_got",
      "pickup_laserTurbine_viewed"
    ]
  },
  "wickedRing": {
    "itemName": "Wicked Ring",
    "pickupText": "Critial strikes reduce all your cooldowns by 1.",
    "fullDescription": "Gain <yellow>5%</yellow> <gray>(+10% per stack) </gray><green>critical chance</green>. <yellow>Critical strikes</yellow> <blue>reduce cooldowns</blue> by <blue>1 second</blue>.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_wicked_ring_completed",
      "challenge_unlock_wicked_ring_viewed"
    ],
    "achievement": [
      "pickup_wickedRing_got",
      "pickup_wickedRing_viewed"
    ]
  },
  "alienhead": {
    "itemName": "Alienhead",
    "pickupText": "Reduces cooldowns for your skills.",
    "fullDescription": "Decrease your <blue>skill cooldowns</blue> by <blue>30%</blue> <gray>(+30% per stack)</gray>.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_alien_head_completed",
      "challenge_unlock_alien_head_viewed"
    ],
    "achievement": [
      "pickup_alienHead_got",
      "pickup_alienHead_viewed"
    ]
  },
  "olLopper": {
    "itemName": "The Ol' Lopper",
    "pickupText": "Enemies take more damage at lower health.",
    "fullDescription": "Deal <yellow>bonus damage</yellow> to enemies with lower health, up to <yellow>+60%</yellow> <gray>(+60% per stack) </gray><green>damage</green>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_lopper_completed",
      "challenge_unlock_lopper_viewed"
    ],
    "achievement": [
      "pickup_theOlLopper_got",
      "pickup_theOlLopper_viewed"
    ]
  },
  "theHitlist": {
    "itemName": "The Hitlist",
    "pickupText": "Killing marked enemies permanently increases damage.",
    "fullDescription": "Randomly <blue>marks up to 1</blue> <gray>(+1 per stack) </gray><green>enemy</green>. Killing a <blue>marked enemy</blue> <yellow>permanently increases damage by 0.5</yellow>, up to <yellow>20 damage</yellow>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_hitlist_completed",
      "challenge_unlock_hitlist_viewed"
    ],
    "achievement": [
      "pickup_theHitList_got",
      "pickup_theHitList_viewed"
    ]
  },
  "photonJetpack": {
    "itemName": "Photon Jetpack",
    "pickupText": "No hands.",
    "fullDescription": "Hold the jump button to <blue>fly</blue> for up to <yellow>1.6</yellow> <gray>(+0.8 per stack) </gray><green>seconds</green>. Recharges over <yellow>1.6 seconds</yellow>.",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_photon_jetpack_completed",
      "challenge_unlock_photon_jetpack_viewed"
    ],
    "achievement": [
      "pickup_theHitList_got",
      "pickup_theHitList_viewed"
    ]
  },
  "shatteringJustice": {
    "itemName": "Shattering Justice",
    "pickupText": "\"Reduce enemy armor on hit. Reduction stacks 5 times.",
    "fullDescription": "Attacks <yellow>reduce enemy armor</yellow> by <yellow>6</yellow> for <yellow>2</yellow> <gray>(+2 per stack) </gray><green>seconds</green>. Reduction stacks up to <yellow>-30 armor</yellow>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_justice_completed",
      "challenge_unlock_justice_viewed"
    ],
    "achievement": [
      "pickup_shatteringJustice_got",
      "pickup_shatteringJustice_viewed"
    ]
  },
  "telescopicSight": {
    "itemName": "Telescopic Sight",
    "pickupText": "Chance to instantly kill an enemy.",
    "fullDescription": "<yellow>1%</yellow> <gray>(+0.5% per stack) </gray><green>chance</green> on hit to <yellow>instantly kill enemies</yellow>. <gray>Does not work</gray> against bosses.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_sight_completed",
      "challenge_unlock_sight_viewed"
    ],
    "achievement": [
      "pickup_telescopicSight_got",
      "pickup_telescopicSight_viewed"
    ]
  },
  "firemansBoots": {
    "itemName": "Fireman's Boots",
    "pickupText": "Fight fire with fire..",
    "fullDescription": "Walking leaves behind a <gray>fire trail</gray> that burns for <yellow>35%</yellow> <gray>(+20% per stack) </gray><green>damage</green>.",
    "category": "Damage",
    "achievement": [
      "pickup_firemansBoots_got",
      "pickup_firemansBoots_viewed"
    ]
  },
  "hyperThreader": {
    "itemName": "Hyper-Threader",
    "pickupText": "Pew pew.",
    "fullDescription": "Hitting enemies <yellow>fires a laser</yellow> that deals <yellow>40% damage</yellow> and <yellow>bounces</yellow> to <yellow>2</yellow> <gray>(+1 per stack) </gray><green>enemies</green>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_threader_completed",
      "challenge_unlock_threader_viewed"
    ],
    "achievement": [
      "pickup_hyperThreader_got",
      "pickup_hyperThreader_viewed"
    ]
  },
  "diosBestFriend": {
    "itemName": "Dio's Best Friend",
    "pickupText": "Cheat death once.",
    "fullDescription": "Taking <gray>fatal damage</gray> <blue>consumes this item</blue> and revives you with <green>40% health</green> and <green>2 seconds of invulnerability</green>.",
    "category": "?",
    "unlock": [
      "challenge_unlock_dios_completed",
      "challenge_unlock_dios_viewed"
    ],
    "achievement": [
      "pickup_diosFriend_got",
      "pickup_diosFriend_viewed"
    ]
  },
  "ancientScepter": {
    "itemName": "Ancient Scepter",
    "pickupText": "Upgrade your special skill.",
    "fullDescription": "Upgrade your <blue>special skill</blue>. <blue>Unique to each character</blue>. <gray>Reduces special skill cooldown by 30% per stack.</gray>",
    "category": "Utility?",
    "unlock": [
      "challenge_unlock_scepter_completed",
      "challenge_unlock_scepter_viewed"
    ],
    "achievement": [
      "pickup_ancientScepter_got",
      "pickup_ancientScepter_viewed"
    ]
  },
  "bottledChaos": {
    "itemName": "Bottled Chaos",
    "pickupText": "Using your Equipment triggers an additional, random Equipment effect.",
    "fullDescription": "Activating an Equipment triggers a <yellow>random equipment</yellow> effect <yellow>1</yellow> <gray>(+1 per stack)</gray> time(s).",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_bottled_chaos_completed",
      "challenge_unlock_bottled_chaos_viewed"
    ],
    "achievement": [
      "pickup_bottledChaos_got",
      "pickup_bottledChaos_viewed"
    ]
  },
  "aegis": {
    "itemName": "Aegis",
    "pickupText": "Healing past full grants you a temporary barrier. Increased maximum barrier.",
    "fullDescription": "Healing past full grants you <green>barrier</green> equal to <green>50%</green> <gray>(+50% per stack)</gray> of the amount you <green>healed</green>. Increases <green>maximum barrier</green> by <green>20%</green> <gray>(+20% per stack)</gray>.",
    "category": "Health",
    "unlock": [
      "challenge_unlock_aegis_completed",
      "challenge_unlock_aegis_viewed"
    ],
    "achievement": [
      "pickup_aegis_got",
      "pickup_aegis_got"
    ]
  },
  "substandardDuplicator": {
    "itemName": "Substandard Duplicator",
    "pickupText": "Picked up items yield an additional temporary copy.",
    "fullDescription": "<blue>Picking up an item</blue> gives you a <yellow>temporary copy</yellow> of itself. Temporary items last an additional <yellow>10</yellow> <gray>(+10 per stack)</gray> <green>seconds</green>",
    "category": "Utility",
    "unlock": [
      "challenge_unlock_duplicator_completed",
      "challenge_unlock_duplicator_viewed"
    ],
    "achievement": [
      "pickup_substandardDuplicator_got",
      "pickup_substandardDuplicator_viewed"
    ]
  },
  "classifiedAccessCodes": {
    "itemName": "Classified Access Codes",
    "pickupText": "Access a deadly weapon against the Teleporter bosses.",
    "fullDescription": "The <yellow>Atlas Cannon</yellow> appears each stage, activating it deals <yellow>40%</yellow> <gray>(+20% per stack)</gray><green> of maximum health as damage to the teleporter boss after it spawns</green>.",
    "category": "Damage",
    "unlock": [
      "challenge_unlock_classified_completed",
      "challenge_unlock_classified_viewed"
    ],
    "achievement": [
      "pickup_classifiedAccessCodes_got",
      "pickup_classifiedAccessCodes_viewed"
    ]
  },
  "umbrella": {
    "itemName": "Umbrella",
    "pickupText": "They fear the rain.",
    "fullDescription": "<blue>Rain</blue> begins for <blue>15 seconds</blue> <gray>(increases per stack)</gray> upon activating the Teleporter. Rain <yellow>stuns, damages, and weakens</yellow> enemies. <blue>You are invincible while it is raining.</blue>",
    "category": "?",
    "unlock": [
      "challenge_unlock_umbrella_completed",
      "challenge_unlock_umbrella_viewed"
    ],
    "achievement": [
      "pickup_umbrella_got",
      "pickup_umbrella_viewed"
    ]
  },
  "rottenbrain": {
    "itemName": "Rotten Brain",
    "pickupText": "Throw a bouncing brain.",
    "fullDescription": "Throw a brain that bounces in place, damaging/slowing enemies for <yellow>6x200%.</yellow>",
    "category": "Equipment",
    "achievement": [
      "pickup_rottenBrain_got",
      "pickup_rottenBrain_viewed"
    ]
  },
  "safeguardLantern": {
    "itemName": "Safeguard Lantern",
    "pickupText": "Drop a lantern that fears and damages enemies for 10 seconds.",
    "fullDescription": "Drop a lantern for 10 seconds. <gray>Fears</gray> and damages enemies for <yellow>20% damage.</yellow>",
    "category": "Equipment",
    "achievement": [
      "pickup_safeguardLantern_got",
      "pickup_safeguardLantern_viewed"
    ]
  },
  "snowglobe": {
    "itemName": "Snowglobe",
    "pickupText": "Randomly freeze enemies for 8 seconds.",
    "fullDescription": "Summon a <blue>snowstorm</blue> that <blue>freezes</blue> monsters at a <yellow>50% chance/sec over 7 seconds</yellow>.",
    "category": "Equipment",
    "achievement": [
      "pickup_snowglobe_got"
    ]
  },
  "explorersKey": {
    "itemName": "Explorer's Key",
    "pickupText": "Unlocks all chests in within 20 meters. [sic]",
    "fullDescription": "<blue>Open all chests</blue> within <yellow>20 meters</yellow>.",
    "category": "Equipment",
    "achievement": [
      "pickup_explorersKey_got"
    ]
  },
  "foreignFruit": {
    "itemName": "Foreign Fruit",
    "pickupText": "Heal on use.",
    "fullDescription": "Heal yourself for <green>50% of your health</green>.",
    "category": "Equipment",
    "achievement": [
      "pickup_foreignFruit_got",
      "pickup_foreignFruit_viewed"
    ]
  },
  "instantMinefield": {
    "itemName": "Instant Minefield",
    "pickupText": "Drop many mines at your feet.",
    "fullDescription": "Drop <yellow>6 mines</yellow> at your feet, each dealing <yellow>400% damage</yellow>.",
    "category": "Equipment",
    "achievement": [
      "pickup_instantMinefield_got"
    ]
  },
  "jarOfSouls": {
    "itemName": "Jar of Souls",
    "pickupText": "Summon a ghost for every enemy in the screen.",
    "fullDescription": "<blue>Duplicate every enemy</blue> as a <blue>ghost</blue> to <yellow>fight on your side</yellow>. Ghosts last <blue>15 seconds</blue> and have <yellow>70% damage</yellow>.",
    "category": "Equipment",
    "achievement": [
      "pickup_jarOfSouls_got",
      "pickup_jarOfSouls_viewed"
    ]
  },
  "carraraMarble": {
    "itemName": "Carrara Marble",
    "pickupText": "Place a marble gate. Teleport back to the gate by activating again.",
    "fullDescription": "Place a <blue>marble gate</blue>. <blue>Teleport back</blue> to the gate by activating again.",
    "category": "Equipment",
    "achievement": [
      "pickup_carraraMarble_got",
      "pickup_carraraMarble_viewed"
    ]
  },
  "sawmerang": {
    "itemName": "Sawmerang",
    "pickupText": "Mow them down!",
    "fullDescription": "<blue>Throw</blue> out a <yellow>sawmerang</yellow>, slicing enemies for <yellow>500% damage</yellow> and making them <gray>bleed for 4x100% damage</gray>. Boomerangs back.",
    "category": "Equipment",
    "achievement": [
      "pickup_sawmerang_got",
      "pickup_sawmerang_viewed"
    ]
  },
  "shatteredMirror": {
    "itemName": "Shattered Mirror",
    "pickupText": "Create a shadow partner for 15 seconds.",
    "fullDescription": "For 15 seconds, <blue>double all your abilities' damage and effects</blue>.",
    "category": "Equipment",
    "achievement": [
      "pickup_shatteredMirror_got",
      "pickup_shatteredMirror_viewed"
    ]
  },
  "disposableMissileLauncher": {
    "itemName": "Disposable Missile Launcher",
    "pickupText": "Fire a swarm of missiles.",
    "fullDescription": "Fire a swarm of <yellow>12 missiles</yellow>, dealing <yellow>300% damage</yellow> each.",
    "category": "Equipment",
    "achievement": [
      "pickup_disposableMissileLauncher_got",
      "pickup_disposableMissileLauncher_viewed"
    ]
  },
  "goldplatedBomb": {
    "itemName": "Goldplated Bomb",
    "pickupText": "Drop and detonate 50% of your money.",
    "fullDescription": "Use <yellow>50% of your gold</yellow> to create a bomb, dealing <yellow>1 damage per gold spent</yellow>. <yellow>Refund 20% of spent gold</yellow> on kill.",
    "category": "Equipment",
    "achievement": [
      "pickup_goldPlatedBomb_got",
      "pickup_goldPlatedBomb_viewed"
    ]
  },
  "droneRepairKit": {
    "itemName": "Drone Repair Kit",
    "pickupText": "Repair and empower all active drones. Summons a unique drone to assist.",
    "fullDescription": "All <blue>drones</blue> are repaired to <green>full health</green> and <blue>empowered</blue> for 8 seconds. <blue>Summons a unique drone.</blue>",
    "category": "Equipment",
    "achievement": [
      "pickup_droneRepairKit_got",
      "pickup_droneRepairKit_viewed"
    ]
  },
  "thqwib": {
    "itemName": "Thqwib",
    "pickupText": "Releases a bloom of Thqwibs, detonating on impact.",
    "fullDescription": "Release a bloom of <yellow>30 thqwibs</yellow>, detonating on impact for <yellow>200% damage</yellow>.",
    "category": "Equipment",
    "achievement": [
      "pickup_thqwib_got",
      "pickup_thqwib_viewed"
    ]
  },
  "dynamitePlunger": {
    "itemName": "Dynamite Plunger",
    "pickupText": "Hitting enemies drops dynamite. Use to detonate.",
    "fullDescription": "Hitting an enemy drops <yellow>dynamite</yellow>. Use to detonate for <yellow>200% damage</yellow>.",
    "category": "Equipment",
    "achievement": [
      "pickup_dynamitePlunger_got",
      "pickup_dynamitePlunger_viewed"
    ]
  },
  "maceReplica": {
    "itemName": "Mace Replica",
    "pickupText": "Swing a powerful mace, activating your item effects.",
    "fullDescription": "Swing a <yellow>powerful mace</yellow> for <yellow>300% damage</yellow>, knocking enemies away. <blue>Guaranteed to activate all on-hit item effects.</blue>",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_mace_completed",
      "challenge_unlock_mace_viewed"
    ],
    "achievement": [
      "pickup_maceReplica_got",
      "pickup_maceReplica_viewed"
    ]
  },
  "giganticAmethyst": {
    "itemName": "Gigantic Amethyst",
    "pickupText": "Resets all your cooldowns.",
    "fullDescription": "<blue>Reset all your cooldowns</blue>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_amethyst_completed",
      "challenge_unlock_amethyst_viewed"
    ],
    "achievement": [
      "pickup_giganticAmethyst_got",
      "pickup_giganticAmethyst_viewed"
    ]
  },
  "crudelydrawnBuddy": {
    "itemName": "Crudely Drawn Buddy",
    "pickupText": "Drop a decoy, attracting nearby enemies.",
    "fullDescription": "Blow up a decoy, attracting and <blue>confusing</blue> enemies for <yellow>8 seconds</yellow>. Looks just like you.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_buddy_completed",
      "challenge_unlock_buddy_viewed"
    ],
    "achievement": [
      "pickup_crudelyDrawnBuddy_got",
      "pickup_crudelyDrawnBuddy_viewed"
    ]
  },
  "prescriptions": {
    "itemName": "Prescriptions",
    "pickupText": "Increase damage and attack speed for 8 seconds.",
    "fullDescription": "Increase <yellow>damage by 30%</yellow> and <yellow>attack speed by 40%</yellow> for <yellow>8 seconds</yellow>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_prescriptions_completed",
      "challenge_unlock_prescriptions_viewed"
    ],
    "achievement": [
      "pickup_prescriptions_got",
      "pickup_prescriptions_viewed"
    ]
  },
  "shieldGenerator": {
    "itemName": "Shield Generator",
    "pickupText": "Become invulnerable for 8 seconds.",
    "fullDescription": "Become <blue>invincible</blue> for <blue>8 seconds</blue>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_shield_generator_completed",
      "challenge_unlock_shield_generator_viewed"
    ],
    "achievement": [
      "challenge_unlock_shield_generator_completed",
      "challenge_unlock_shield_generator_viewed"
    ]
  },
  "unstableWatch": {
    "itemName": "Unstable Watch",
    "pickupText": "Pause time for 7 seconds.",
    "fullDescription": "<blue>Stop time</blue> for <yellow>7 seconds</yellow>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_watch_completed",
      "challenge_unlock_watch_viewed"
    ],
    "achievement": [
      "pickup_unstableWatch_got",
      "pickup_unstableWatch_viewed"
    ]
  },
  "lostDoll": {
    "itemName": "Lost Doll",
    "pickupText": "Harm yourself to deal massive damage to an enemy.",
    "fullDescription": "Sacrifice <gray>25% health</gray> to <yellow>damage</yellow> an enemy for <gray>500% of your maximum health</gray>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_doll_completed",
      "challenge_unlock_doll_viewed"
    ],
    "achievement": [
      "pickup_lostDoll_got",
      "pickup_lostDoll_viewed"
    ]
  },
  "pillagedGold": {
    "itemName": "Pillaged Gold",
    "pickupText": "For 14 seconds, hitting enemies causes them to drop gold.",
    "fullDescription": "For <yellow>14 seconds</yellow>, every hit <yellow>drops gold</yellow>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_pillaged_completed",
      "challenge_unlock_pillaged_viewed"
    ],
    "achievement": [
      "pickup_pillagedGold_got",
      "pickup_pillagedGold_view"
    ]
  },
  "captainsBrooch": {
    "itemName": "Captain's Brooch",
    "pickupText": "One man's wreckage is another man's treasure.",
    "fullDescription": "Call down a <blue>chest</blue> nearby. Chest cost is <yellow>doubled</yellow>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_brooch_completed",
      "challenge_unlock_brooch_viewed"
    ],
    "achievement": [
      "pickup_captainsBrooch_got",
      "pickup_captainsBrooch_viewed"
    ]
  },
  "theBackup": {
    "itemName": "Theb Backup",
    "pickupText": "Call drones for backup. Lasts 10 seconds.",
    "fullDescription": "Create <yellow>4 drones</yellow> to fight for you for <blue>10 seconds</blue>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_backup_completed",
      "challenge_unlock_backup_viewed"
    ],
    "achievement": [
      "pickup_theBackup_got",
      "pickup_theBackup_viewed"
    ]
  },
  "supermassiveLeech": {
    "itemName": "Supermassive Leech",
    "pickupText": "Grant massive life on hit for 10 seconds.",
    "fullDescription": "For <yellow>10 seconds</yellow>, every hit heals you for <green>10 health</green>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_leech_completed",
      "challenge_unlock_leech_viewed"
    ],
    "achievement": [
      "pickup_massiveLeech_got",
      "pickup_massiveLeech_viewed"
    ]
  },
  "glowingMeteorite": {
    "itemName": "Glowing Meteorite",
    "pickupText": "Rain meteors from the sky, hurting both enemies and allies.",
    "fullDescription": "<blue>Meteors fall from the sky</blue>, damaging <gray>enemies and friends</gray> for <yellow>220% damage</yellow>. Lasts <yellow>8 seconds</yellow>.",
    "category": "Equipment",
    "unlock": [
      "challenge_unlock_meteorite_completed",
      "challenge_unlock_meteorite_viewed"
    ],
    "achievement": [
      "pickup_glowingMeteorite_got",
      "pickup_glowingMeteorite_viewed"
    ]
  },
  "legendarySpark": {
    "itemName": "Legendary Spark",
    "pickupText": "Item",
    "fullDescription": "Smite them. Smite them all.",
    "category": "<yellow>8%</yellow> chance on hit to create <yellow>2</yellow> <gray>(+1 per stack) </gray><yellow>sparks</yellow> that <blue>smite</blue> enemies for <yellow>200% TOTAL damage</yellow>."
  },
  "impOverlordsTentacle": {
    "itemName": "Imp Overlord's Tentacle",
    "pickupText": "Item",
    "fullDescription": "Cut off the head of the snake.. and the body lives on.",
    "category": "<blue>Summon an imp</blue> bodyguard. <green>Revives</green> after <yellow>60</yellow> <gray>(-10 per stack) </gray><green>seconds</green>. <gray>Increase imp health and damage by 15% per stack.</gray>",
    "achievement": [
      "pickup_impOverlordsTentacle_got",
      "pickup_impOverlordsTentacle_viewed"
    ]
  },
  "burningWitness": {
    "itemName": "Burning Witness",
    "pickupText": "Item",
    "fullDescription": "The Worm's eye seems to still see.. watching.. rewarding..",
    "category": "Killing enemies grants <yellow>a fire trail and 30% movement speed</yellow> for <yellow>6</yellow> <gray>(+2 per stack) </gray><green>seconds</green>.",
    "achievement": [
      "pickup_burningWitness_got",
      "pickup_burningWitness_viewed"
    ]
  },
  "colossalKnurl": {
    "itemName": "Colossal Knurl",
    "pickupText": "Item",
    "fullDescription": "Increase health, health regeneration, and armor.",
    "category": "Increase <green>maximum health</green> by <green>40</green>, <green>health regeneration</green> by <green>1.2/second</green>, and <green>armor</green> by <green>6</green>.",
    "achievement": [
      "pickup_colossalKnurl_got",
      "pickup_colossalKnurl_viewed"
    ]
  },
  "ifritsHorn": {
    "itemName": "Ifrit's Horn",
    "pickupText": "Item",
    "fullDescription": "Chance to fire a flaming wave.",
    "category": "<yellow>8%</yellow> chance on hit to fire a <yellow>flaming wave</yellow> that <blue>incinerates</blue> enemies for <yellow>300%</yellow> <gray>(+300% per stack) </gray><green>TOTAL damage</green>.",
    "achievement": [
      "pickup_ifritsHorn_got",
      "pickup_ifritsHorn_viewed"
    ]
  },
  "nematocystnozzle": {
    "itemName": "Nematocystnozzle",
    "pickupText": "Equipment",
    "fullDescription": "Best served cold.",
    "category": "Shoot out <yellow>6 nematocysts</yellow> that deal <yellow>400% damage</yellow>.",
    "achievement": [
      "pickup_nematocystNozzle_got",
      "pickup_nematocystNozzle_viewed"
    ]
  },
  "scorchingShellpiece": {
    "itemName": "Scorching Shellpiece",
    "pickupText": "Item",
    "fullDescription": "Gain shield. Fire a barrage of projectiles when it breaks.",
    "category": "Gain a <blue>20</blue> <gray>(+20 per stack) </gray><green>health shield</green>. <yellow>Fire up to 4</yellow> <gray>(+2 per stack)</gray><green> projectiles</green> at nearby enemies <yellow>when it breaks</yellow>.",
    "achievement": [
      "pickup_scorchingShellPiece_got",
      "pickup_scorchingShellPiece_viewed"
    ]
  }
} as const;

export { ITEMS }