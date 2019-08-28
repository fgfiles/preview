var WONBATS = WONBATS || {};

function EntityFactory(physics, input, backgroundName) {
    this.physics = physics;
    this.input = input;
    this.backgroundName = backgroundName;
    this.groundY = 0;
    this.groundParticlesY = 0;
    this.player;

    this.pool = [];
    this.updatable = [];

    this.hardwareParticles = new WONBATS.MovieClip(particles, "nutsandbolts");
    this.weaponParticles = new WONBATS.MovieClip(polar, "_polar_stuff_weapons_wreck");

    this.maxParticles = game.config.MAX_PHYSICS_PARTICLES;
}

WONBATS.addEnum(EntityFactory, [
    "PLAYER", "GROUND", "GROUND_PARTICLES", "WALL", "BOT_1", "BOT_2", "BOT_3", "BOT_1_BODY_1", "BOT_1_BODY_2", "BOT_1_WHEEL_1", "BOT_1_EYE",
    "NUT_1", "NUT_2", "NUT_3", "SCREW_1", "SCREW_2", "SCREW_3", "PLATE_1", "PLATE_2", "WEAPON_AXE_1", "WEAPON_STICK_1", "WEAPON_STICK_2", "WEAPON_NUT_1", "WEAPON_MACE_1", "ITEM_AXE", "ITEM_MACE", "ITEM_BAT", "ITEM_HAMMER", "ITEM_SAW", "BULLET_SAW", "WEAPON_SAW_1", "WEAPON_SAW_2", "WEAPON_SAW_3", "VACUUM_1", "VACUUM_2", "VACUUM_3", "VACUUM_4", "DRONE_1", "DRONE_2", "DRONE_3",
    "DRONE_1_PART_1", "DRONE_1_PART_2", "DRONE_1_PART_3", "DRONE_1_PART_4", "DRONE_1_PART_5", "BULLET_ROCKET", "SHADOW", "BEARBOT_1", "BEARBOT_2", "BEARBOT_3", "BEARBOT_PART_1", "BEARBOT_PART_2", "BEARBOT_PART_3", "BEARBOT_PART_4", "BEARBOT_PART_5", "BEARBOT_PART_6", "BEARBOT_PART_7", "BEARBOT_PART_8", "BEARBOT_PART_9", "BEARBOT_PART_10", "BEARBOT_PART_11", "BEARBOT_PART_12", "WEAPON_BAT_1", "WEAPON_BAT_2", "WEAPON_HAMMER_1", "WEAPON_SHOP_1", "WEAPON_SHOP_2", "NERD_PART_1", "NERD_PART_2", "NERD_PART_3", "NERD_PART_4", "NERD_PART_5", "NERD_PART_6", "NERD_VACUUM_1", "NERD_VACUUM_2", "NERD_VACUUM_3", "NERD_VACUUM_4"]);

EntityFactory.ITEMS_CLASS = [WONBATS.ItemAxe, WONBATS.ItemMace, WONBATS.ItemBat, WONBATS.ItemHammer, WONBATS.ItemSaw];
EntityFactory.PLAYER_BULLETS_CLASS = [WONBATS.BulletSaw];
EntityFactory.ENEMIES_BULLETS_CLASS = [WONBATS.BulletRocket];
EntityFactory.ENEMIES_CLASS = [WONBATS.Bot1, WONBATS.Bot2, WONBATS.Bot3, WONBATS.Drone1, WONBATS.Drone2, WONBATS.Drone3, WONBATS.BearBot1, WONBATS.BearBot2, WONBATS.BearBot3];
EntityFactory.prototype.create = function (type, x, y, lookDir, container, className) {
    switch (type) {
        case EntityFactory.GROUND:
            var height = 50;
            this.physics.create(this.physics.BOX, {
                x: x,
                y: y,
                width: 150000,
                height: height,
                mass: 0,
                material: "ground",
                collisionGroup: "ground",
                collisionMask: ["player", "enemy", "item"]
            });
            this.groundY = y - (height / 2);
            break;
        case EntityFactory.GROUND_PARTICLES:
            var height = 50;
            this.physics.create(this.physics.BOX, {
                x: x,
                y: y,
                width: 150000,
                height: height,
                mass: 0,
                material: "ground_particles",
                collisionGroup: "ground_particles",
                collisionMask: ["physics_particle"]
            });
            this.groundParticlesY = y - (height / 2);
            break;
        case EntityFactory.WALL:
            this.physics.create(this.physics.BOX, {
                x: x,
                y: y,
                width: 10,
                height: 1600,
                mass: 0,
                material: "ground",
                collisionGroup: "ground",
                collisionMask: ["physics_particle", "player", "enemy"]
            });
            break;
        case EntityFactory.BOT_1_BODY_1:
            var bot1Body1 = this.getFirstDead(WONBATS.Bot1Body1);
            if (bot1Body1 === undefined) {
                bot1Body1 = new WONBATS.Bot1Body1(this.physics, arturito, className);
            }
            bot1Body1.reset(x, y, lookDir);
            container.addChild(bot1Body1.view);
            this.updatable.push(bot1Body1);
            this.addShadow(bot1Body1, container, this.groundParticlesY);
            return bot1Body1;
            break;
        case EntityFactory.BOT_1_BODY_2:
            var bot1Body2 = this.getFirstDead(WONBATS.Bot1Body2);
            if (bot1Body2 === undefined) {
                bot1Body2 = new WONBATS.Bot1Body2(this.physics, arturito, className);
            }
            bot1Body2.reset(x, y, lookDir);
            container.addChild(bot1Body2.view);
            this.updatable.push(bot1Body2);
            this.addShadow(bot1Body2, container, this.groundParticlesY);
            return bot1Body2;
            break;
        case EntityFactory.BOT_1_WHEEL_1:
            var bot1Wheel = this.getFirstDead(WONBATS.Bot1Wheel);
            if (bot1Wheel === undefined) {
                bot1Wheel = new WONBATS.Bot1Wheel(this.physics, arturito, className);
            }
            bot1Wheel.reset(x, y, lookDir);
            container.addChild(bot1Wheel.view);
            this.updatable.push(bot1Wheel);
            this.addShadow(bot1Wheel, container, this.groundParticlesY);
            return bot1Wheel;
            break;
        case EntityFactory.BOT_1_EYE:
            var bot1Eye = this.getFirstDead(WONBATS.Bot1Eye);
            if (bot1Eye === undefined) {
                bot1Eye = new WONBATS.Bot1Eye(this.physics, arturito, className);
            }
            bot1Eye.reset(x, y, lookDir);
            container.addChild(bot1Eye.view);
            this.updatable.push(bot1Eye);
            this.addShadow(bot1Eye, container, this.groundParticlesY);
            return bot1Eye;
            break;
        case EntityFactory.NUT_1:
            var nut = this.getFirstDead(WONBATS.Nut1);
            if (nut === undefined) {
                nut = new WONBATS.Nut1(this.physics, particles, className);
            }
            nut.reset(x, y, lookDir);
            container.addChild(nut.view);
            this.updatable.push(nut);
            this.addShadow(nut, container, this.groundParticlesY);
            return nut;
            break;
        case EntityFactory.NUT_2:
            var nut = this.getFirstDead(WONBATS.Nut2);
            if (nut === undefined) {
                nut = new WONBATS.Nut2(this.physics, particles, className);
            }
            nut.reset(x, y, lookDir);
            container.addChild(nut.view);
            this.updatable.push(nut);
            this.addShadow(nut, container, this.groundParticlesY);
            return nut;
            break;
        case EntityFactory.NUT_3:
            var nut = this.getFirstDead(WONBATS.Nut3);
            if (nut === undefined) {
                nut = new WONBATS.Nut3(this.physics, particles, className);
            }
            nut.reset(x, y, lookDir);
            container.addChild(nut.view);
            this.updatable.push(nut);
            this.addShadow(nut, container, this.groundParticlesY);
            return nut;
            break;
        case EntityFactory.SCREW_1:
            var screw = this.getFirstDead(WONBATS.Screw1);
            if (screw === undefined) {
                screw = new WONBATS.Screw1(this.physics, particles, className);
            }
            screw.reset(x, y, lookDir);
            container.addChild(screw.view);
            this.updatable.push(screw);
            this.addShadow(screw, container, this.groundParticlesY);
            return screw;
            break;
        case EntityFactory.SCREW_2:
            var screw = this.getFirstDead(WONBATS.Screw2);
            if (screw === undefined) {
                screw = new WONBATS.Screw2(this.physics, particles, className);
            }
            screw.reset(x, y, lookDir);
            container.addChild(screw.view);
            this.updatable.push(screw);
            this.addShadow(screw, container, this.groundParticlesY);
            return screw;
            break;
        case EntityFactory.SCREW_3:
            var screw = this.getFirstDead(WONBATS.Screw3);
            if (screw === undefined) {
                screw = new WONBATS.Screw3(this.physics, particles, className);
            }
            screw.reset(x, y, lookDir);
            container.addChild(screw.view);
            this.updatable.push(screw);
            this.addShadow(screw, container, this.groundParticlesY);
            return screw;
            break;
        case EntityFactory.PLATE_1:
            var plate = this.getFirstDead(WONBATS.Plate1);
            if (plate === undefined) {
                plate = new WONBATS.Plate1(this.physics, particles, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.PLATE_2:
            var plate = this.getFirstDead(WONBATS.Plate2);
            if (plate === undefined) {
                plate = new WONBATS.Plate2(this.physics, particles, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;

        case EntityFactory.DRONE_1_PART_1:
            var dronePart = this.getFirstDead(WONBATS.Drone1Part1);
            if (dronePart === undefined) {
                dronePart = new WONBATS.Drone1Part1(this.physics, drone, className);
            }
            dronePart.reset(x, y, lookDir);
            container.addChild(dronePart.view);
            this.updatable.push(dronePart);
            this.addShadow(dronePart, container, this.groundParticlesY);
            return dronePart;
            break;
        case EntityFactory.DRONE_1_PART_2:
            var dronePart = this.getFirstDead(WONBATS.Drone1Part2);
            if (dronePart === undefined) {
                dronePart = new WONBATS.Drone1Part2(this.physics, drone, className);
            }
            dronePart.reset(x, y, lookDir);
            container.addChild(dronePart.view);
            this.updatable.push(dronePart);
            this.addShadow(dronePart, container, this.groundParticlesY);
            return dronePart;
            break;
        case EntityFactory.DRONE_1_PART_3:
            var dronePart = this.getFirstDead(WONBATS.Drone1Part3);
            if (dronePart === undefined) {
                dronePart = new WONBATS.Drone1Part3(this.physics, drone, className);
            }
            dronePart.reset(x, y, lookDir);
            container.addChild(dronePart.view);
            this.updatable.push(dronePart);
            this.addShadow(dronePart, container, this.groundParticlesY);
            return dronePart;
            break;
        case EntityFactory.DRONE_1_PART_4:
            var dronePart = this.getFirstDead(WONBATS.Drone1Part4);
            if (dronePart === undefined) {
                dronePart = new WONBATS.Drone1Part4(this.physics, drone, className);
            }
            dronePart.reset(x, y, lookDir);
            container.addChild(dronePart.view);
            this.updatable.push(dronePart);
            this.addShadow(dronePart, container, this.groundParticlesY);
            return dronePart;
            break;
        case EntityFactory.DRONE_1_PART_5:
            var dronePart = this.getFirstDead(WONBATS.Drone1Part5);
            if (dronePart === undefined) {
                dronePart = new WONBATS.Drone1Part5(this.physics, drone, className);
            }
            dronePart.reset(x, y, lookDir);
            container.addChild(dronePart.view);
            this.updatable.push(dronePart);
            this.addShadow(dronePart, container, this.groundParticlesY);
            return dronePart;
            break;
        case EntityFactory.BEARBOT_1_PART_1:
            var part = this.getFirstDead(WONBATS.Bearbot1Part1);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part1(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;

        case EntityFactory.BEARBOT_1_PART_2:
            var part = this.getFirstDead(WONBATS.Bearbot1Part2);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part2(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;
        case EntityFactory.BEARBOT_1_PART_3:
            var part = this.getFirstDead(WONBATS.Bearbot1Part3);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part3(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;

        case EntityFactory.BEARBOT_1_PART_4:
            var part = this.getFirstDead(WONBATS.Bearbot1Part4);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part4(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;
        case EntityFactory.BEARBOT_1_PART_5:
            var part = this.getFirstDead(WONBATS.Bearbot1Part5);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part5(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;
        case EntityFactory.BEARBOT_1_PART_6:
            var part = this.getFirstDead(WONBATS.Bearbot1Part6);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part6(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;
        case EntityFactory.BEARBOT_1_PART_7:
            var part = this.getFirstDead(WONBATS.Bearbot1Part7);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part7(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;
        case EntityFactory.BEARBOT_1_PART_8:
            var part = this.getFirstDead(WONBATS.Bearbot1Part8);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part8(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;
        case EntityFactory.BEARBOT_1_PART_9:
            var part = this.getFirstDead(WONBATS.Bearbot1Part9);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part9(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, pcontainer, this.groundParticlesY);
            return part;
            break;
        case EntityFactory.BEARBOT_1_PART_10:
            var part = this.getFirstDead(WONBATS.Bearbot1Part10);
            if (part === undefined) {
                part = new WONBATS.Bearbot1Part10(this.physics, bearbot, className);
            }
            part.reset(x, y, lookDir);
            container.addChild(part.view);
            this.updatable.push(part);
            this.addShadow(part, container, this.groundParticlesY);
            return part;
            break;

        case EntityFactory.VACUUM_1:
            var plate = this.getFirstDead(WONBATS.Vacuum1);
            if (plate === undefined) {
                plate = new WONBATS.Vacuum1(this.physics, polar, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.VACUUM_2:
            var plate = this.getFirstDead(WONBATS.Vacuum2);
            if (plate === undefined) {
                plate = new WONBATS.Vacuum2(this.physics, polar, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.VACUUM_3:
            var plate = this.getFirstDead(WONBATS.Vacuum3);
            if (plate === undefined) {
                plate = new WONBATS.Vacuum3(this.physics, polar, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.VACUUM_4:
            var plate = this.getFirstDead(WONBATS.Vacuum4);
            if (plate === undefined) {
                plate = new WONBATS.Vacuum4(this.physics, polar, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;

        case EntityFactory.NERD_PART_1:
            var plate = this.getFirstDead(WONBATS.NerdPart1);
            if (plate === undefined) {
                plate = new WONBATS.NerdPart1(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_PART_2:
            var plate = this.getFirstDead(WONBATS.NerdPart2);
            if (plate === undefined) {
                plate = new WONBATS.NerdPart2(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_PART_3:
            var plate = this.getFirstDead(WONBATS.NerdPart3);
            if (plate === undefined) {
                plate = new WONBATS.NerdPart3(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_PART_4:
            var plate = this.getFirstDead(WONBATS.NerdPart4);
            if (plate === undefined) {
                plate = new WONBATS.NerdPart4(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_PART_5:
            var plate = this.getFirstDead(WONBATS.NerdPart5);
            if (plate === undefined) {
                plate = new WONBATS.NerdPart5(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_PART_6:
            var plate = this.getFirstDead(WONBATS.NerdPart6);
            if (plate === undefined) {
                plate = new WONBATS.NerdPart6(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_VACUUM_1:
            var plate = this.getFirstDead(WONBATS.NerdVacuum1);
            if (plate === undefined) {
                plate = new WONBATS.NerdVacuum1(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_VACUUM_2:
            var plate = this.getFirstDead(WONBATS.NerdVacuum2);
            if (plate === undefined) {
                plate = new WONBATS.NerdVacuum2(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_VACUUM_3:
            var plate = this.getFirstDead(WONBATS.NerdVacuum3);
            if (plate === undefined) {
                plate = new WONBATS.NerdVacuum3(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;
        case EntityFactory.NERD_VACUUM_4:
            var plate = this.getFirstDead(WONBATS.NerdVacuum4);
            if (plate === undefined) {
                plate = new WONBATS.NerdVacuum4(this.physics, nerd, className);
            }
            plate.reset(x, y, lookDir);
            container.addChild(plate.view);
            this.updatable.push(plate);
            this.addShadow(plate, container, this.groundParticlesY);
            return plate;
            break;


        case EntityFactory.WEAPON_STICK_1:
            var weaponPart = this.getFirstDead(WONBATS.WeaponStick1);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponStick1(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_STICK_2:
            var weaponPart = this.getFirstDead(WONBATS.WeaponStick2);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponStick2(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_AXE_1:
            var weaponPart = this.getFirstDead(WONBATS.WeaponAxe1);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponAxe1(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_NUT_1:
            var weaponPart = this.getFirstDead(WONBATS.WeaponNut1);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponNut1(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;

        case EntityFactory.WEAPON_MACE_1:
            var weaponPart = this.getFirstDead(WONBATS.WeaponMace1);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponMace1(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_SAW_1:
            var weaponPart = this.getFirstDead(WONBATS.WeaponSaw1);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponSaw1(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_SAW_2:
            var weaponPart = this.getFirstDead(WONBATS.WeaponSaw2);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponSaw2(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_SAW_3:
            var weaponPart = this.getFirstDead(WONBATS.WeaponSaw3);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponSaw3(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_BAT_1:
            var weaponPart = this.getFirstDead(WONBATS.WeaponBat1);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponBat1(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_BAT_2:
            var weaponPart = this.getFirstDead(WONBATS.WeaponBat2);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponBat2(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_HAMMER_1:
            var weaponPart = this.getFirstDead(WONBATS.WeaponHammer1);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponHammer1(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_SHOP_1:
            var weaponPart = this.getFirstDead(WONBATS.WeaponShop1);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponShop1(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;
        case EntityFactory.WEAPON_SHOP_2:
            var weaponPart = this.getFirstDead(WONBATS.WeaponShop2);
            if (weaponPart === undefined) {
                weaponPart = new WONBATS.WeaponShop2(this.physics, polar, className);
            }
            weaponPart.reset(x, y, lookDir);
            container.addChild(weaponPart.view);
            this.updatable.push(weaponPart);
            this.addShadow(weaponPart, container, this.groundParticlesY);
            return weaponPart;
            break;

        case EntityFactory.PLAYER:
            var player = this.getFirstDead(WONBATS.Player);
            if (player === undefined) {
                player = new WONBATS.Player(this.physics, this.input);
            }
            player.reset(x, y, lookDir);
            container.addChild(player.view);
            player.setTrail(container);
            player.discardWeaponCb = this.onWeaponDestroyed.bind(this);
            player.throwCb = this.onPlayerThrow.bind(this);
            player.vacuumExplosionCb = this.onPlayerVacuumExplosion.bind(this);
            this.updatable.push(player);
            this.player = player;
            return player;
            break;

        case EntityFactory.BOT_1:
            var enemy = this.getFirstDead(WONBATS.Bot1);
            if (enemy === undefined) {
                enemy = new WONBATS.Bot1(this.physics);
            }
            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            enemy.weaponSound = "weaponAce";
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1);
            return enemy;
            break;
        case EntityFactory.BOT_2:
            var enemy = this.getFirstDead(WONBATS.Bot2);
            if (enemy === undefined) {
                enemy = new WONBATS.Bot2(this.physics);
            }
            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            enemy.weaponSound = "weaponAce";
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1);
            return enemy;
            break;
        case EntityFactory.BOT_3:
            var enemy = this.getFirstDead(WONBATS.Bot3);
            if (enemy === undefined) {
                enemy = new WONBATS.Bot3(this.physics);
            }
            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            enemy.weaponSound = "weaponAce";
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1);
            return enemy;
            break;
        case EntityFactory.DRONE_1:
            var enemy = this.getFirstDead(WONBATS.Drone1);
            if (enemy === undefined) {
                enemy = new WONBATS.Drone1(this.physics);
            }
            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            enemy.weaponSound = "weaponSaw";
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1);
            return enemy;
            break;
        case EntityFactory.DRONE_2:
            var enemy = this.getFirstDead(WONBATS.Drone2);
            if (enemy === undefined) {
                enemy = new WONBATS.Drone2(this.physics);
            }
            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            enemy.weaponSound = "weaponSaw";
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1);
            return enemy;
            break;
        case EntityFactory.DRONE_3:
            var enemy = this.getFirstDead(WONBATS.Drone3);
            if (enemy === undefined) {
                enemy = new WONBATS.Drone3(this.physics);
            }
            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            enemy.weaponSound = "weaponSaw";
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1);
            return enemy;
            break;

        case EntityFactory.BEARBOT_1:
            var enemy = this.getFirstDead(WONBATS.BearBot1);
            if (enemy === undefined) {
                enemy = new WONBATS.BearBot1(this.physics);
            }
            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1.5);
            return enemy;
            break;
        case EntityFactory.BEARBOT_2:
            var enemy = this.getFirstDead(WONBATS.BearBot2);
            if (enemy === undefined) {
                enemy = new WONBATS.BearBot2(this.physics);
            }
            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1.5);
            return enemy;
            break;
        case EntityFactory.BEARBOT_3:
            var enemy = this.getFirstDead(WONBATS.BearBot3);
            if (enemy === undefined) {
                enemy = new WONBATS.BearBot3(this.physics);
            }

            WONBATS.soundManager.play("nerdhaha", true);

            enemy.reset(x, y, lookDir);
            enemy.dieCb = this.onEnemyDeath.bind(this);
            container.addChild(enemy.view);
            this.updatable.push(enemy);
            this.addShadow(enemy, container, this.groundY, 1.5);
            return enemy;
            break;

        case EntityFactory.ITEM_AXE:
            var item = this.getFirstDead(WONBATS.ItemAxe);
            if (item === undefined) {
                item = new WONBATS.ItemAxe(this.physics);
            }
            item.reset(x, y);
            container.addChild(item.view);
            this.updatable.push(item);
            return item;
            break;
        case EntityFactory.ITEM_MACE:
            var item = this.getFirstDead(WONBATS.ItemMace);
            if (item === undefined) {
                item = new WONBATS.ItemMace(this.physics);
            }
            item.reset(x, y);
            container.addChild(item.view);
            this.updatable.push(item);
            return item;
            break;
        case EntityFactory.ITEM_BAT:
            var item = this.getFirstDead(WONBATS.ItemBat);
            if (item === undefined) {
                item = new WONBATS.ItemBat(this.physics);
            }
            item.reset(x, y);
            container.addChild(item.view);
            this.updatable.push(item);
            return item;
            break;
        case EntityFactory.ITEM_HAMMER:
            var item = this.getFirstDead(WONBATS.ItemHammer);
            if (item === undefined) {
                item = new WONBATS.ItemHammer(this.physics);
            }
            item.reset(x, y);
            container.addChild(item.view);
            this.updatable.push(item);
            return item;
            break;
        case EntityFactory.ITEM_SAW:
            var item = this.getFirstDead(WONBATS.ItemSaw);
            if (item === undefined) {
                item = new WONBATS.ItemSaw(this.physics);
            }
            item.reset(x, y);
            container.addChild(item.view);
            this.updatable.push(item);
            return item;
            break;

        case EntityFactory.BULLET_SAW:
            var bullet = this.getFirstDead(WONBATS.BulletSaw);
            if (bullet === undefined) {
                bullet = new WONBATS.BulletSaw(this.physics);
            }
            WONBATS.soundManager.play("shuriken", true);
            bullet.breakApartCb = this.onWeaponDestroyed.bind(this);
            bullet.reset(x, y, lookDir);
            bullet.breakSound = "sawDestroyed";
            container.addChild(bullet.view);
            this.updatable.push(bullet);
            this.addShadow(bullet, container, this.groundY, 0.6);
            return bullet;
            break;

        case EntityFactory.BULLET_ROCKET:
            var bullet = this.getFirstDead(WONBATS.BulletRocket);
            if (bullet === undefined) {
                bullet = new WONBATS.BulletRocket(this.physics);
            }
            WONBATS.soundManager.play("sawstart", true);
            bullet.breakApartCb = this.onWeaponDestroyed.bind(this);
            bullet.reset(x, y, lookDir);
            bullet.breakSound = "sawDestroyed";
            container.addChild(bullet.view);
            this.updatable.push(bullet);
            this.addShadow(bullet, container, this.groundY, 0.6);
            return bullet;
            break;

        case EntityFactory.SHADOW:
            var shadow = this.getFirstDead(WONBATS.Shadow);
            if (shadow === undefined) {
                shadow = new WONBATS.Shadow();
            }
            container.addChild(shadow);
            this.updatable.push(shadow);
            return shadow;
            break;
    }
};

EntityFactory.prototype.getFirstDead = function (type) {
    for (var i = this.pool.length - 1; i > -1; i -= 1) {
        var entity = this.pool[i],
            isType = WONBATS.isType(entity, type);
        if (isType && entity.dead && entity.kill) {
            this.pool = WONBATS.splice(this.pool, i, 1);
            return entity;
        }
    }
    return;
};

EntityFactory.prototype.getFirstAlive = function (type) {
    for (var i = 0; i < this.updatable.length; i++) {
        var entity = this.updatable[i],
            isType = WONBATS.isType(entity, type); //(entity.constructor === type);
        if (isType && !entity.dead && !entity.kill) {
            return entity;
        }
    }
    return;
};

EntityFactory.prototype.getAllAlive = function (arguments) {
    var entities = [];
    for (var i = 0; i < this.updatable.length; i++) {
        var entity = this.updatable[i],
            isType = WONBATS.isType(entity, arguments);
        if (isType && !entity.dead && !entity.kill) {
            entities.push(entity);
        }
    }
    return entities;
};

EntityFactory.prototype.update = function (dt) {
    var activeParticles;
    for (var i = 0; i < this.updatable.length; i++) {
        var entity = this.updatable[i];
        entity.update(dt);
        if (entity.outOfScreen) {
            var diff = Math.abs(this.player.getDiff(entity)),
                bounds = this.player.getBounds(entity);
            if (this.player.life <= 0) {
                diff = 0;
                bounds = (entity.width / 2);
            }
            if (diff >= (game.config.GAME_WIDTH / 2) + bounds) {
                entity.outOfScreen();
            } else {
                if (!activeParticles) {
                    activeParticles = [];
                }
                activeParticles.push(entity);
                var container = entity.view.parent;
                container.setChildIndex(entity.view, 0);
            }
        }
    }
    if (activeParticles && activeParticles.length > this.maxParticles) {
        var particlesDiff = activeParticles.length - this.maxParticles;
        activeParticles = WONBATS.sortByProperty(activeParticles, "timeCounter");
        for (var i = particlesDiff - 1; i > -1; i--) {
            activeParticles[i].forceRecycle();
        }
    }

    var items = this.getAllAlive(EntityFactory.ITEMS_CLASS);
    for (var item in items) {
        var distance = WONBATS.distance(this.player.body.position[0], items[item].body.position[0], this.player.body.position[1], items[item].body.position[1]);
        if (this.player.life > 0 && distance <= this.player.getBounds(items[item]) + this.player.attackLandDistance) {
            this.player.setWeapon(items[item].constructor, true);
            WONBATS.soundManager.play("pickupItem", true);
            items[item].grabbed();
        }
    }
    var enemyBullets = this.getAllAlive(EntityFactory.ENEMIES_BULLETS_CLASS);
    for (var bullet in enemyBullets) {
        if (this.player.life > 0 && Math.abs(this.player.getDiff(enemyBullets[bullet])) <= this.player.getBounds(enemyBullets[bullet])) {
            enemyBullets[bullet].hit(1, 0);
            this.player.hit(enemyBullets[bullet].damage, enemyBullets[bullet].hitstunDelay);
        }
    }

    var bullets = this.getAllAlive(EntityFactory.PLAYER_BULLETS_CLASS);
    var enemies = this.getAllAlive(EntityFactory.ENEMIES_CLASS);
    for (var bullet in bullets) {
        for (var enemyBullet in enemyBullets) {
            if ((enemyBullets[enemyBullet].life > 0) && Math.abs(enemyBullets[enemyBullet].getDiff(bullets[bullet])) <= enemyBullets[enemyBullet].getBounds(bullets[bullet])) {
                bullets[bullet].hit(1, 0);
                enemyBullets[enemyBullet].hit(bullets[bullet].damage, bullets[bullet].hitstunDelay);
            }
        }
        for (var enemy in enemies) {
            if ((enemies[enemy].life.length > 0) && Math.abs(enemies[enemy].getDiff(bullets[bullet])) <= enemies[enemy].getBounds(bullets[bullet])) {
                bullets[bullet].hit(1, 0);
                enemies[enemy].hit(bullets[bullet].damage, bullets[bullet].hitstunDelay, bullets[bullet]);
            }
        }
    }

    var shadows = this.getAllAlive([WONBATS.Shadow]);
    for (var shadow in shadows) {
        shadows[shadow].parent.setChildIndex(shadows[shadow], shadows[shadow].parent.children.legnth);
    }

    for (var i = this.updatable.length - 1; i > -1; i -= 1) {
        var entity = this.updatable[i];
        if (entity.kill && !entity.dead) {
            entity.dead = true;
            if (entity.dieCb) {
                entity.dieCb(entity);
            }
            if (entity.view) {
                entity.view.filters = [];
                entity.view.visible = false;
            }
            if (entity.body) {
                entity.body.sleep();
            }
            this.updatable = WONBATS.splice(this.updatable, i, 1);
            this.pool.push(entity);
        }
    }
};

EntityFactory.prototype.onPlayerVacuumExplosion = function (vacuumParts, x, y, currentWeaponId, container) {
    var hardware = this.createHardware(30, 40);
    vacuumParts = vacuumParts.children;
    vacuumParts = WONBATS.shuffle(vacuumParts);
    this.addBodyExplosion(x, y, vacuumParts, container);
    this.addBodyExplosion(x, y, hardware, container);
    this.onWeaponDestroyed(currentWeaponId, x, y - 125, container, -90, 15);
};

EntityFactory.prototype.onWeaponDestroyed = function (weaponId, x, y, container, minAngle, maxAngle) {
    var weaponParts = this.weaponParticles;
    weaponParts = weaponParts.getChildByName(weaponId);
    if (weaponParts) {
        weaponParts = weaponParts.children;
        weaponParts = WONBATS.shuffle(weaponParts);
        this.addBodyExplosion(x, y, weaponParts, container, minAngle, maxAngle);
    }
};

EntityFactory.prototype.onEnemyDeath = function (entity) {
    var minParts,
        maxParts;
    if (WONBATS.isType(entity, [WONBATS.BearBot3])) { //Nerd hardware parts
        minParts = 40;
        maxParts = 60;
    }
    var parts = entity.movieclip.children[0].children,
        hardware = this.createHardware(minParts, maxParts),
        position = entity.body.position,
        container = entity.view.parent;
    parts = WONBATS.shuffle(parts);
    hardware = WONBATS.shuffle(hardware);
    this.addBodyExplosion(position[0], position[1], hardware, container);
    this.addBodyExplosion(position[0], position[1], parts, container);

    if (entity.item && WONBATS.isArray(entity.item)) {
        entity.item = WONBATS.getRandomFromArray(entity.item);
    }
    if (entity.item) {
        var item = this.create(entity.item, position[0], position[1], 1, container);
        item.bounceToPlayer(entity, this.player);
    }
    entity.item = undefined;
};

EntityFactory.prototype.createHardware = function (min, max) {
    var hardware = [];
    var minParts = min || 10;
    var maxParts = max || 15;
    var totalParts = Math.floor(minParts + (maxParts - minParts) * Math.random());
    for (var i = 0; i < totalParts; i++) {
        var part = WONBATS.getRandomFromArray(this.hardwareParticles.children);
        hardware.push(part);
    }
    return hardware;
};

EntityFactory.prototype.addBodyExplosion = function (x, y, parts, container, minAngle, maxAngle) {
    var count = parts.length,
        minSpeed = 600,
        maxSpeed = 1200,
        angleVelocity = 15,
        index = 0;
    minAngle = minAngle || 0;
    maxAngle = maxAngle || 360;
    for (var angle = minAngle; angle < maxAngle; angle += Math.floor(maxAngle / count)) {
        if (index < count) {
            var name = parts[index].name.toUpperCase();
            var className = parts[index].classname;
            var part = this.create(EntityFactory[name], 0, 0, 1, container, className);
            part.body.position[0] = x;
            part.body.position[1] = y;

            var speed = minSpeed + ((maxSpeed - minSpeed) * Math.random());

            part.body.velocity[0] = speed * Math.cos(angle * Math.PI / 180.0);
            part.body.velocity[1] = speed * Math.sin(angle * Math.PI / 180.0);
            part.body.angularVelocity = angleVelocity * WONBATS.getRandomFromArray([1, -1]);
            index++;
        }
    }
};

EntityFactory.prototype.addShadow = function (target, container, groundY, initialScale) {
    if (!initialScale) {
        var scaleX = (target.width / 421), //421 shadow's width
            scaleY = (target.height / 123), //123 shadow's height
            scale = scaleX + scaleY;
        initialScale = scale;
    }
    this.create(EntityFactory.SHADOW, 0, 0, 1, container).setTarget(target, initialScale, groundY, this.backgroundName);
};

EntityFactory.prototype.dispose = function () {
    this.physics = null;
    this.input = null;
    this.player = null;

    
    this.pool = WONBATS.loopAndDisposeArray(this.pool);
    this.pool = null; // loop dispose
    
    this.updatable = WONBATS.loopAndDisposeArray(this.updatable);
    this.updatable = null; //loop dispose

    this.hardwareParticles.destroy();
    this.hardwareParticles = null;
    this.weaponParticles.destroy();
    this.weaponParticles = null;
};

EntityFactory.isItemClass = function (object) {
    return WONBATS.isType(object, EntityFactory.ITEMS_CLASS);
};

EntityFactory.prototype.onPlayerThrow = function (type, x, y, lookDir, container) {
    var bullet = this.create(type, x, y, lookDir, container);
};

WONBATS.EntityFactory = EntityFactory;
