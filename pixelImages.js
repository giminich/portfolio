const pixelImages = [
  // First, all images NOT containing 'hat', 'skin', or '26x26'
  "pixel_images/3industrial_boxjelly_flat.png",
  "pixel_images/industrial_boxjelly_flat_sleep.png",
  "pixel_images/basketball.png",
  "pixel_images/Box_Jelly_bounce1.png",
  "pixel_images/2industrial_boxjelly_flat.png",
  "pixel_images/3industrial_boxjelly_flat.png",
  "pixel_images/4industrial_boxjelly_flat.png",
  "pixel_images/5industrial_boxjelly_flat.png",
  "pixel_images/6industrial_boxjelly_flat.png",
  "pixel_images/BoxJelly_Idle1.png",
  "pixel_images/BoxJelly_Idle1alt.png",
  "pixel_images/BoxJelly_Idle1alt.png",
  "pixel_images/Box_Jelly_bounce1.png",
  "pixel_images/Box_Jelly_bounce3.png",
  "pixel_images/Box_Jelly_bounce3.png",
  "pixel_images/Box_Skin_1.png",
  "pixel_images/Box_Skin_2.png",
  "pixel_images/checkpoint icon.png",
  "pixel_images/JungleHead_1.png",
  "pixel_images/JungleHead_Crreature_30x30 with grass.png",
  "pixel_images/JungleSkin_30x30_1.png",
  "pixel_images/leadpod_explode_1(down face).png",
  "pixel_images/leadpod_explode_2.png",
  "pixel_images/leadpod_explode_3.png",
  "pixel_images/leadpod_explode_4.png",
  "pixel_images/leadpod_explode_5.png",
  "pixel_images/leadpod_idle_1.png",
  "pixel_images/leadpod_idle_2.png",
  "pixel_images/leadpod_old_idle_1.png",
  "pixel_images/LeadToilet_Furniture_32x32.png",
  "pixel_images/Locker_Creature1.png",
  "pixel_images/Locker_Creature2.png",
  "pixel_images/Locker_Creature_Open.png",
  "pixel_images/Locker_Creature_Unlock1.png",
  "pixel_images/TvHat_26x26 1.png",
  "pixel_images/TvHat_26x26 2.png",
  "pixel_images/TvHat_26x26 3.png",
  "pixel_images/TvHat_26x26 4.png",
  "pixel_images/Locker_Creature_Unlock2.png",
  "pixel_images/Locker_Creature_Unlock3.png",
  "pixel_images/Locker_Creature_Unlock4.png",
  "pixel_images/Locker_Creature_Unlock5.png",
  "pixel_images/Locker_Creature_Unlock6.png",
  "pixel_images/Locker_Creature_Unlock7.png",
  "pixel_images/Locker_Creature_Unlock8.png",
  "pixel_images/OctopusHat_30x30 2).png",
  "pixel_images/OctopusHat_30x30 3).png",
  "pixel_images/OctopusHat_30x30.png",
  "pixel_images/OctopusHat_30x30_2.png",
  "pixel_images/OctopusHat_30x30_3.png",
  "pixel_images/pocket boxjelly item.png",
  "pixel_images/pocket boxjelly item1.png",
  "pixel_images/pocket boxjelly item2.png",
  "pixel_images/RandomSkin.png",
  "pixel_images/slimey scroll item.png",
  "pixel_images/Comment_Slime.png",
  "pixel_images/Comment_Slime_Calling.png",
  "pixel_images/ConeHat_32x45.png",
  "pixel_images/fire extinguisher.png",
  "pixel_images/oldSamuraiHat_26x26.png",
  "pixel_images/oldSantaHat_26x26.png",
  "pixel_images/MainMenu_UI_StoryMode_small.png",
  "pixel_images/pack closed.png",
  "pixel_images/pack open.png",
  "pixel_images/FireParticle_Sprite_11x11.png",
  "pixel_images/WhiteDustParticle_Sprite_11x11.png",
  "pixel_images/WhiteDustParticle2_Sprite_11x11.png",
  "pixel_images/passthrough_plat_small alt.png",
  "pixel_images/picture_art_bluebox_jelly.png",
  "pixel_images/picture_art_boxjelly_observation.png",
  "pixel_images/picture_art_chillin.png",
  "pixel_images/picture_art_portrait.png",
  "pixel_images/picture_default.png",
  "pixel_images/play icon.png",
  "pixel_images/Slime_Calling.png",
  "pixel_images/VampHat_26x26.png",
  "pixel_images/VikingBeardHat_26x26.png",
  "pixel_images/WizardHat_26x26.png",
  "pixel_images/SunGlassesHat.png",
  "pixel_images/SuperSayin_28x28.png",
  "pixel_images/SuperSayin_28x28_1.png",
  "pixel_images/Tiki blank.png",
  "pixel_images/Tiki smile.png",
  "pixel_images/TinySlime_checkpoint_indicator.png",
  "pixel_images/Torcher1.png",
  "pixel_images/Torcher2.png",
  "pixel_images/Torcher3.png",
  "pixel_images/Torcher4.png",
  "pixel_images/Torcher5.png",
  "pixel_images/TorcherHead1.png",
  "pixel_images/TorcherHead2.png",
  "pixel_images/TorcherHead3.png",
  "pixel_images/TorcherHead4.png",
  "pixel_images/TorcherHead5.png",
  "pixel_images/TrashCanSkin.png",
  "pixel_images/TrashCanSkin2.png",
  "pixel_images/VikingSkin.png",
  "pixel_images/VineSpriteSheet_16x16_centered.png",
  "pixel_images/worm head 2.png",
  "pixel_images/AzureMP4 skin.png",
  "pixel_images/BananaHat_30x30.png",
  "pixel_images/BananaHat_34x34.png", 
  "pixel_images/26x26_slime_reference.png",
  "pixel_images/AnimeHat_26x26.png",
  "pixel_images/ArmsHat_50x50.png",
  "pixel_images/ArmsHat_50x50_1.png",
  "pixel_images/BananaHat_26x26.png",
  "pixel_images/BrainSkin_26x26.png",
  "pixel_images/BrainSkin_2_26x26.png",
  "pixel_images/ChainHat_26x26.png",
  "pixel_images/ChefHat_26x23.png",
  "pixel_images/ConeHat_26x26.png",
  "pixel_images/ConeSamuraiHat_26x26.png",
  "pixel_images/CursorSkin_26x26.png",
  "pixel_images/CuteHat_26x26.png",
  "pixel_images/DealWithItHat.png",
  "pixel_images/DOOMHat_26x26.png",
  "pixel_images/ElvisHat_26x26.png",
  "pixel_images/EyeballHat_26x26 2.png",
  "pixel_images/EyeballHat_26x26 3.png",
  "pixel_images/EyeballHat_26x26.png",
  "pixel_images/EyeHat_1_34x34.png",
  "pixel_images/EyeHat_34x34.png",
  "pixel_images/FinHat_26x26.png",
  "pixel_images/FootbalHat_26x26.png",
  "pixel_images/FootballHat_Blue_26x23.png",
  "pixel_images/FootballHat_Red_26x26.png",
  "pixel_images/FrogHat_26x26.png",
  "pixel_images/GlassHat_26x26.png",
  "pixel_images/GnomeHat_26x26.png",
  "pixel_images/GoldSamuraiHat_26x26.png",
  "pixel_images/GoofyGuyHat_26x26.png",
  "pixel_images/HazmatHat_26x26.png",
  "pixel_images/HornsHat_26x26.png",
  "pixel_images/JordanBrightRedHat_26x26.png",
  "pixel_images/JordanDarkBlueHat_26x26.png",
  "pixel_images/JordanGreenHat_26x26.png",
  "pixel_images/JordanHotPink_26x26.png",
  "pixel_images/JordanLightBlueHat_26x26.png",
  "pixel_images/JordanLightPurpleHat_26x26.png",
  "pixel_images/JordanOrangeHat_26x26.png",
  "pixel_images/JordanPink_26x26.png",
  "pixel_images/JordanPurpleHat_26x26.png",
  "pixel_images/JordanRedHat_26x26.png",
  "pixel_images/JordanRedlowHat_26x26.png",
  "pixel_images/JordanTealHat_26x26.png",
  "pixel_images/JordanWhiteHat_26x26.png",
  "pixel_images/JordanYellowHat_26x26.png",
  "pixel_images/KeyboardSkin_26x26.png",
  "pixel_images/KnightHat_26x26.png",
  "pixel_images/MCSlimeHat_26x26.png",
  "pixel_images/MCSlimeHat_2_26x26.png",
  "pixel_images/NerdHat_26x26.png",
  "pixel_images/NerdNoseHat_26x26.png",
  "pixel_images/NewYorkerHat_26x26.png",
  "pixel_images/RobotDevilHat_26x26.png",
  "pixel_images/SamuraiHat_26x26.png",
  "pixel_images/SantaHat_26x26.png",
  "pixel_images/ScreamHat_26x26.png",
  "pixel_images/SlimeHat_26x26.png",
  "pixel_images/SnailHat_26x26 1.png",
  "pixel_images/SnailHat_26x26 2.png",
  "pixel_images/SnailHat_26x26 3.png",
  "pixel_images/SnailHat_26x26 4.png",
  "pixel_images/SnailHat_26x26 5.png",
  "pixel_images/SnailHat_26x26 6.png",
  "pixel_images/SnailHat_26x26 7.png",
  "pixel_images/SoccerHat_26x26.png",
  "pixel_images/SpartanHat_26x26.png",
  "pixel_images/SpikeyHat_26x26.png",
  "pixel_images/SuperSayin_26x26.png",
  "pixel_images/SuperSayin_26x26_2.png",
  "pixel_images/TrollSkullHat_26x26.png",
  "pixel_images/CoinPile_large.png",
  "pixel_images/CoinPile_massive.png",
  "pixel_images/Menu_Icons_20x20.png",
  "pixel_images/PC_24x36.png",
  "pixel_images/SelectObject_Icons_20x20.png",
  "pixel_images/SelectObject_Icons_20x20_2.png",
  "pixel_images/SizePortal_16x40_alt3.png",
  "pixel_images/SmallBrickTextBox.png",
  "pixel_images/SpikeRing_skin1.png",
  "pixel_images/SpikeRing_skin2.png",
  "pixel_images/SpikeRing_skin3.png",
  "pixel_images/SpikeRing_skin4.png",
  "pixel_images/SpikeRing_skin5.png",
  "pixel_images/SpikeRing_skin6.png",
  "pixel_images/Window_Clear_box 81x18.png",
];
