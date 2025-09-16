export const projects = [
    {
        id: "feagi",
        img: "../assets/images/feagi.png",
        name: "Feagi Blender",
        tags: "FEAGI, Python, Blender",
        contents: {
            paragraphs: [
                "For this project I was on a team of 4 working on a connector from Neuraville’s open source FEAGI. I was responsible for the basic transformations as well as the keyframing of models being modified by the connector. The connector can be used with rigify models and works with both forward and inverse kinematics to adjust a rigged model in real time through gyro and servo entries controlled through FEAGI. "
            ],
            gallery: [
                "../assets/images/feagi_1.gif",
                "../assets/images/feagi.png",
                
            ]
        },
        links: {
            url: [
                "https://github.com/feagi/blender-connector"
            ],
            icon: [
                "FaGithub"
            ]
        }
    },
    {
        id: "underbelly",
        img: "../assets/images/underbelly/LitSideCam.png",
        name: "The Underbelly",
        tags: "Unreal Engine 5, Blender",
        contents: {
            paragraphs: [
                "The Underbelly is a prototype I made in Unreal Engine 5, with assets modeled in Blender. The player finds themselves an underground area of a city, that is filled with rogue machinery in a dark, industrial expanse. They spawn in third-person perspective and are able to enter a trigger volume, bringing the camera into a cinematic sequence where a large robot tracks them in real time. Both the mech and environment use procedural materials such as emissive glowing wires and latticework grates.",
                "The blueprint for the camera change and sequencing consisted of two major parts. Starting with a player overlap on a trigger volume, the first part finds the new camera location (Blue), followed by a check seeing if the camera is still within the bounds set in a separate volume and switching from the player camera over to the connected camera (Orange). The inputs for this blueprint are the static coordinate Booleans, the camera object, and the two volumes.",
                "Within this blueprint, there was a function that would resolve the new camera coordinate on one plane, which is executed once for the x, y, and z coordinates of the camera. First it would compare the player coordinate to the camera coordinate, and check if they were within 10 units of each other. This would prevent the camera from being locked directly to the player and making direction changes jarring. Following that, it checks if the coordinate was not set to static. If either are false, the camera coordinates are not changed. If both are true however, the camera will move in the same direction as the player. ",
                "In the unlit level you can see the camera, a trigger volume on the walkway for the player to cross into, as well as a volume to contain the camera. The volumetric fog made most of the placed lights and columns hazy to help create the feeling of the unending bowels of a city in the future, creating a scene larger than life. The walkway continues into the darkness to emphasize the scale of the area as the player heads in a different direction. ",
                "This is the procedurally generated material used for the wires on the mech, connecting his head to the torso and the wires in the place of its limbs. This material as well as the diamond-shaped grates of the walkways were the two procedurally generated materials in this project, and both used a similar technique of masking lines for different purposes. ",
                "The wire material was generated using an emission mask, as well as just a default material. For the repeating glowing line, a red mask was used on a TexCoord[0] to get a line that was scaled then tiled using a Frac node. Using a step node makes it so that a thin strip is all that is emitted by the material. By multiplying the mask by a color and strength the wires are brought to emit at a specific strength and color leading to the wires used in this project once they are fed into the material’s emissive color. Using two rotated masks similar to that of the emissive color, the opacity mask was used to create the diamond pattern of the metallic grates. ",
                "The mech itself has a blueprint, that checks for a player pawn to then get the location of. There is a branch checking the validity of the pawn before trying to access its world location, which will be used in the target location. The mech skeletal mesh component gets cast to an animation graph to then set the target location for use in the graph as the game progresses. ",
                "The mech has two static animation sequences used as poses, one holding on to a column, and the other having the mech hang from the walkways. The animation graph takes the target location and lowers the z coordinate by 10 units to use as the LookAt location which then moves the head in relation to the static pose to look at the player. To make it clear where the mech is looking, a spotlight was anchored to the mech’s glowing sensors on its head to follow the player as they move.",
                "As well as these functions, the walkways and mech were modeled in blender by me. The mech also was given a rigged skeleton to help pose the model before it was textured using materials I made in unreal engine 5. The walkways consisted of a grate, railings and supporting beams, each a different material. They all had the same base grate and supports, so they were all the same except for the changing railings for the different tile layouts (Turns, Lines, Intersections, etc.)",
                "Upon reflection, there could have been a few changes in terms of implementation. The camera for example could have been attached to the player themselves to make it a more modular system and less of a single use blueprint. The procedural grate material could have also been improved by making it have a universal direction. If I were to ever continue on this project, I would add more scripting and animation to the mech, so as to make it a more cinematic experience throughout."
            ],
            gallery: [
                "../assets/images/underbelly/UnderbellyCamera.mp4",
                "../assets/images/underbelly/CameraBPFull.png",
                "../assets/images/underbelly/CameraCoordUpdateBP.png",
                "../assets/images/underbelly/Unlit 2,5D.png",
                "../assets/images/underbelly/Wire Material.png",
                "../assets/images/underbelly/WireMaterialBP.png",
                "../assets/images/underbelly/LookAtBP.png",
                "../assets/images/underbelly/LookAtAnimGraph.png",
                "../assets/images/underbelly/TilablePlatforms.png",
                "../assets/images/underbelly/Shortcut.mp4",

               
            ]
        },
        links: {
            url: [

            ],
            icon: [

            ]
        }
    },
    {
        id: "bluebeard",
        img: "../assets/images/bluebeard_hallway.png",
        name: "Bluebeard's Mansion",
        tags: "Unity 3D",
        contents: {
            paragraphs: [
                "Bluebeard’s Mansion was a level concept made by me and another team member as an idea to make a video game adaptation of the folktale Bluebeard. This project was a part of a capstone experience for Digital Narrative and Interactive Design (DNID) at the University of Pittsburgh using free assets found on the Unity marketplace. ",
                "In this level the visible screenshots were parts that I was responsible for. I did the lighting, asset placement and also basic programming for this project. The intent behind what I placed was to show the living space of a dangerous alcoholic which would play into the player’s fear as they walk through Bluebeard’s Mansion, searching for a way into his forbidden room. ",

            ],
            gallery: [
                "../assets/images/bluebeard_1.png",
                "../assets/images/bluebeard_2.png",
                "../assets/images/bluebeard_3.png"
            ]
        },
        links: {
            url: [

            ],
            icon: [

            ]
        }
    },
    
];