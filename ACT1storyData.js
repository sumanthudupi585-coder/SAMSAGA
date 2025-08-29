/**
 * Act I: The Kashi Khanda — Dharma's Cipher
 * Ground-up reconstruction of Act 1 using scene, choice, and puzzle flow
 * aligned to the provided blueprint (Dashashwamedh → Labyrinth → Nyāya → Vaiśeṣika → Warden).
 */

window.ACT1_STORY_DATA = {
  // Scene 1 — Dashashwamedh Ghat
  "JOURNEY_START": {
    "title": "Dashashwamedh Ghat",
    "text": "You materialize with a gasp into dusk at Dashashwamedh Ghat. Incense and marigold drift over the Ganga as saffron-robed priests sweep great lamps through the smoky air. Dr. Thorne's journal is open to a sketch of a seven‑flame diya. Three flames are circled: 2, 5, 7. The note reads: ‘The ritual is the key.’",
    "choices": [
      { "id": "focus_ritual", "text": "Focus on the ritual", "nextScene": "GHAT_RITUAL_FOCUS", "effects": { "attributes": { "spiritual_insight": 1 } } },
      { "id": "focus_crowd", "text": "Focus on the crowd", "nextScene": "GHAT_CROWD_FOCUS", "effects": { "attributes": { "compassion": 1 } }, "worldStateTriggers": { "heard_grey_suits": true } },
      { "id": "focus_river", "text": "Focus on the river", "nextScene": "GHAT_RIVER_FOCUS", "effects": { "attributes": { "wisdom": 1 } } }
    ]
  },

  "GHAT_RITUAL_FOCUS": {
    "title": "Reading the Fire",
    "text": "Seven movements repeat: raise, lower, clockwise, counter‑clockwise, toward crowd, toward self, hold center. The circled sequence 2‑5‑7 resolves: Lower, Towards Crowd, Center. A small offering bowl floats nearby—intentional, waiting.",
    "interactions": [ { "verb": "Trace", "noun": "pattern on water", "scene": "RITUAL_CIPHER" } ],
    "choices": [ { "text": "Step to the bowl", "nextScene": "RITUAL_CIPHER" } ]
  },

  "GHAT_CROWD_FOCUS": {
    "title": "Listening Among Thousands",
    "text": "Snatches of speech cut through the chant: men in grey suits near the temples; a scholar’s notes seized. A modern tension coils beneath the ritual’s splendor. The offering bowl bobs at the steps.",
    "choices": [ { "text": "Examine the bowl", "nextScene": "RITUAL_CIPHER" } ]
  },

  "GHAT_RIVER_FOCUS": {
    "title": "The Unjudging Current",
    "text": "Thorne’s memory returns: ‘The river carries all things and judges none. Find that stillness.’ Your breath steadies; the seven‑flame code clarifies. The bowl drifts within reach.",
    "choices": [ { "text": "Send the reply via water", "nextScene": "RITUAL_CIPHER" } ]
  },

  "RITUAL_CIPHER": {
    "title": "Puzzle: The Ritual Cipher",
    "text": "You guide a marigold petal across the bowl: down toward self, forward toward the crowd, then a tap at center. The signal is sent.",
    "choices": [
      { "id": "send_signal", "text": "Trace Lower → Crowd → Center", "nextScene": "BOATMAN_DELIVERS", "worldStateTriggers": { "ritual_signal_sent": true } }
    ]
  },

  "BOATMAN_DELIVERS": {
    "title": "The Silent Boatman",
    "text": "A wooden boat ghosts to the steps. The boatman offers a sealed clay pot and nods downriver toward smoke‑shrouded Manikarnika.",
    "choices": [
      { "text": "Take the clay pot and head into the alleys", "nextScene": "LABYRINTH_ENTRANCE", "effects": { "inventory": { "add": ["Pearl Earring (sealed in clay)"] } }, "worldStateTriggers": { "has_clay_pot": true, "has_pearl": true } }
    ]
  },

  // Scene 2 — The Labyrinth and the Offering
  "LABYRINTH_ENTRANCE": {
    "title": "The Labyrinth of the Ghats",
    "text": "You leave the river and enter torch‑lit veins of stone. Whispers ride the dark; carvings of sages and gods line a crumbling wall. Smoke thickens—the fires of Manikarnika draw near. A silent ascetic blocks the way.",
    "choices": [
      { "id": "main_path", "text": "Follow the main path", "nextScene": "TOWARD_MANIKARNIKA" },
      { "id": "dark_alley", "text": "Investigate the dark alley", "nextScene": "WHISPER_EXCHANGE" },
      { "id": "study_carvings", "text": "Examine the carvings", "nextScene": "CARVING_LESSONS" }
    ]
  },

  "WHISPER_EXCHANGE": {
    "title": "Shadows Speak English",
    "text": "Two men trade a device for coins. ‘Axiom… the subject proceeds as predicted.’ You retreat unseen.",
    "choices": [ { "text": "Back to the fork", "nextScene": "LABYRINTH_ENTRANCE", "worldStateTriggers": { "axiom_confirmed": true } } ]
  },

  "CARVING_LESSONS": {
    "title": "Lessons in Stone",
    "text": "Mudras, Shiva’s dance, and Nyāya’s insistence on context—these carvings teach as much as they depict. Insight steels you for trials ahead.",
    "choices": [ { "text": "Proceed toward Manikarnika", "nextScene": "TOWARD_MANIKARNIKA", "effects": { "attributes": { "wisdom": 1 } } } ]
  },

  "TOWARD_MANIKARNIKA": {
    "title": "Gate of Ash",
    "text": "The cremation ground’s heat wavers before you. The ascetic sits unmoving. The clay pot’s seal breaks to fine ash and a Pearl Earring. An inscription glows: ‘What is lost but never gone? What is a jewel in the fire of becoming? What anchors the cycle of desire?’",
    "choices": [ { "text": "Approach the sacred fire", "nextScene": "OFFERING_PUZZLE" } ]
  },

  "OFFERING_PUZZLE": {
    "title": "Puzzle: The Offering",
    "text": "Attachment must pass through fire. Place the earring upon the sacred flame to open the way.",
    "choices": [
      { "id": "offer_pearl", "text": "Place Pearl Earring on the pyre", "nextScene": "ASCETIC_NOD", "condition": "gameState.playerState.inventory && gameState.playerState.inventory.some(i=>String(i).includes('Pearl Earring'))", "effects": { "inventory": { "remove": ["Pearl Earring (sealed in clay)"] } }, "worldStateTriggers": { "attachment_transmuted": true } }
    ]
  },

  "ASCETIC_NOD": {
    "title": "Seen and Passed",
    "text": "Memories surge and fade—the earring’s lives burn clean. The ascetic opens ancient eyes and nods. A lotus carving waits nearby.",
    "choices": [ { "text": "Press the center of the lotus", "nextScene": "LOTUS_MECHANISM" } ]
  },

  "LOTUS_MECHANISM": {
    "title": "Descent to Reason",
    "text": "Stone groans; a stair yawns open. Air without scent spills from below. Nyāya awaits.",
    "choices": [ { "text": "Descend", "nextScene": "NYAYA_CHAMBER" } ]
  },

  // Scene 3 — The First Sage’s Trial (Nyāya)
  "NYAYA_CHAMBER": {
    "title": "The Four Pramāṇas",
    "text": "A perfect black circle with four equidistant alcoves surrounds a sealed iris door. Master the means of knowledge to open it.",
    "choices": [
      { "text": "Pratyakṣa: cast torchlight low", "nextScene": "NYAYA_PERCEPTION", "worldStateTriggers": { "nyaya_pratyaksha": true } },
      { "text": "Anumāṇa: complete the syllogism", "nextScene": "NYAYA_INFERENCE", "worldStateTriggers": { "nyaya_anumana": true } },
      { "text": "Upamāna: assemble the Yali", "nextScene": "NYAYA_UPAMANA", "worldStateTriggers": { "nyaya_upamana": true } },
      { "text": "Śabda: trust Thorne’s code", "nextScene": "NYAYA_SABDA", "worldStateTriggers": { "nyaya_shabda": true } }
    ]
  },

  "NYAYA_PERCEPTION": { "title": "Perception Reveals", "text": "Oblique light reveals an astrolabe etched as bas‑relief—the image was always there, unseen.", "choices": [ { "text": "Return to chamber", "nextScene": "NYAYA_CHECK_GATE" } ] },
  "NYAYA_INFERENCE": { "title": "Inference Completed", "text": "You inscribe ‘sacred geometry’ to resolve the form: 3‑1‑4‑1 glows upon the stone.", "choices": [ { "text": "Return to chamber", "nextScene": "NYAYA_CHECK_GATE" } ] },
  "NYAYA_UPAMANA": { "title": "Analogy Assembled", "text": "Rings align: lion body, elephant head, horse legs. The Yali hums.", "choices": [ { "text": "Return to chamber", "nextScene": "NYAYA_CHECK_GATE" } ] },
  "NYAYA_SABDA": { "title": "Testimony Chosen", "text": "You activate the trusted head. Thorne’s note confirms the ratio: 3.141.", "choices": [ { "text": "Return to chamber", "nextScene": "NYAYA_CHECK_GATE" } ] },

  "NYAYA_CHECK_GATE": {
    "title": "The Iris Listens",
    "text": "Knowledge resonates through stone.",
    "choices": [
      { "text": "Open the iris", "nextScene": "VAISESIKA_MACHINE", "condition": "gameState.worldState.nyaya_pratyaksha && gameState.worldState.nyaya_anumana && gameState.worldState.nyaya_upamana && gameState.worldState.nyaya_shabda" },
      { "text": "Complete remaining alcoves", "nextScene": "NYAYA_CHAMBER" }
    ]
  },

  // Scene 4 — The Atoms of Vaiśeṣika
  "VAISESIKA_MACHINE": {
    "title": "The Nine Dravyas",
    "text": "A colossal brass‑stone orrery sleeps amid nine empty pedestals. Place the substances of reality to wake it.",
    "choices": [
      { "text": "Pṛthvī: take a lodestone", "nextScene": "DRAVYA_EARTH", "worldStateTriggers": { "dravya_prithvi": true } },
      { "text": "Ap: collect perennial water", "nextScene": "DRAVYA_WATER", "worldStateTriggers": { "dravya_ap": true } },
      { "text": "Tejas: focus light to ignite", "nextScene": "DRAVYA_FIRE", "worldStateTriggers": { "dravya_tejas": true } },
      { "text": "Vāyu: tune the chimes", "nextScene": "DRAVYA_AIR", "worldStateTriggers": { "dravya_vayu": true } },
      { "text": "Ākāśa: leave the space empty", "nextScene": "DRAVYA_ETHer", "worldStateTriggers": { "dravya_akasha": true } },
      { "text": "Kāla: align the sundial to dusk", "nextScene": "DRAVYA_TIME", "worldStateTriggers": { "dravya_kala": true } },
      { "text": "Dik: mirror a single beam across cavern", "nextScene": "DRAVYA_DIRECTION", "worldStateTriggers": { "dravya_dik": true } },
      { "text": "Ātman: stand upon the plate", "nextScene": "DRAVYA_ATMAN", "worldStateTriggers": { "dravya_atman": true } },
      { "text": "Manas: place Thorne’s journal", "nextScene": "DRAVYA_MANAS", "worldStateTriggers": { "dravya_manas": true } }
    ]
  },

  "DRAVYA_EARTH": { "title": "Earth Placed", "text": "The lodestone settles with weight.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },
  "DRAVYA_WATER": { "title": "Water Placed", "text": "A drop joins a basin, ripples concentric.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },
  "DRAVYA_FIRE": { "title": "Fire Placed", "text": "A lens‑born flame leaps alive.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },
  "DRAVYA_AIR": { "title": "Air Placed", "text": "Harmonic wind sings through stone.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },
  "DRAVYA_ETHer": { "title": "Ākāśa Acknowledged", "text": "The pedestal glows around honored emptiness.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },
  "DRAVYA_TIME": { "title": "Time Aligned", "text": "The shadow rests at dusk.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },
  "DRAVYA_DIRECTION": { "title": "Direction Fixed", "text": "A single beam stitches the cavern.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },
  "DRAVYA_ATMAN": { "title": "Self Recognized", "text": "Stillness acknowledges witness.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },
  "DRAVYA_MANAS": { "title": "Mind Offered", "text": "Pages whirl—Eleanor, Lily, warnings, love—and pour into the machine.", "choices": [ { "text": "Continue", "nextScene": "DRAVYA_CHECK" } ] },

  "DRAVYA_CHECK": {
    "title": "The Machine Wakes",
    "text": "Pedestals hum in sympathy.",
    "choices": [
      { "text": "Activate the orrery", "nextScene": "WARDEN_APPEARS", "condition": "gameState.worldState.dravya_prithvi && gameState.worldState.dravya_ap && gameState.worldState.dravya_tejas && gameState.worldState.dravya_vayu && gameState.worldState.dravya_akasha && gameState.worldState.dravya_kala && gameState.worldState.dravya_dik && gameState.worldState.dravya_atman && gameState.worldState.dravya_manas" },
      { "text": "Place remaining substances", "nextScene": "VAISESIKA_MACHINE" }
    ]
  },

  // Scene 5 — The Warden
  "WARDEN_APPEARS": {
    "title": "The Warden",
    "text": "The Nyāya Cipher condenses in your palms. From shadow steps Silas in grey tactical gear. ‘It’s not a key to enlightenment,’ he says. ‘It’s a key to a prison.’",
    "choices": [
      { "text": "‘What prison?’", "nextScene": "WARDEN_MONOLOGUE" },
      { "text": "‘Who are you?’", "nextScene": "WARDEN_MONOLOGUE" },
      { "text": "Remain silent", "nextScene": "WARDEN_MONOLOGUE" }
    ]
  },

  "WARDEN_MONOLOGUE": {
    "title": "Stability Over Freedom",
    "text": "Silas speaks of Axiom’s wardenship and the Yantra’s catastrophic ‘restore’. A wrist‑tap triggers a quake; rock seals the way behind as a new exit cracks open. For a heartbeat the cavern resolves into green code—then stone again.",
    "choices": [ { "text": "Escape into the dark", "nextScene": "ACT1_END" } ]
  },

  "ACT1_END": {
    "title": "End of Act I",
    "text": "Darkness swallows falling stone. You run clutching the Cipher and Thorne’s truth. The star map points toward Hampi and Sāṃkhya.",
    "choices": [ { "text": "Continue your journey", "nextAct": 2 } ]
  }
};

console.log('✅ ACT1_STORY_DATA (Kashi Khanda) loaded.');
