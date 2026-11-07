/**
 * Cars Library - 36 Automobile Brands & 288 Background-Removed Real Studio Models
 * Sourced directly from local user directory: cars/<Brand>/<Model.png>
 */

export interface CarLibraryItem {
  modelName: string;
  fileName: string;
  imageUrl: string;
}

export const CARS_LIBRARY_DATA: Record<string, CarLibraryItem[]> = {
  "Aston Martin": [
    {
      "modelName": "DB11",
      "fileName": "Aston Martin DB11.png",
      "imageUrl": "/cars/Aston%20Martin/Aston%20Martin%20DB11.png"
    },
    {
      "modelName": "DB12",
      "fileName": "Aston Martin DB12.png",
      "imageUrl": "/cars/Aston%20Martin/Aston%20Martin%20DB12.png"
    },
    {
      "modelName": "DBX",
      "fileName": "Aston Martin DBX.png",
      "imageUrl": "/cars/Aston%20Martin/Aston%20Martin%20DBX.png"
    },
    {
      "modelName": "Vanquish",
      "fileName": "Aston Martin Vanquish.png",
      "imageUrl": "/cars/Aston%20Martin/Aston%20Martin%20Vanquish.png"
    },
    {
      "modelName": "Vantage",
      "fileName": "Aston Martin Vantage.png",
      "imageUrl": "/cars/Aston%20Martin/Aston%20Martin%20Vantage.png"
    }
  ],
  "Audi": [
    {
      "modelName": "A4",
      "fileName": "Audi A4.png",
      "imageUrl": "/cars/Audi/Audi%20A4.png"
    },
    {
      "modelName": "A6",
      "fileName": "Audi A6.png",
      "imageUrl": "/cars/Audi/Audi%20A6.png"
    },
    {
      "modelName": "A8 L",
      "fileName": "Audi A8 L.png",
      "imageUrl": "/cars/Audi/Audi%20A8%20L.png"
    },
    {
      "modelName": "e-tron GT",
      "fileName": "Audi e-tron GT.png",
      "imageUrl": "/cars/Audi/Audi%20e-tron%20GT.png"
    },
    {
      "modelName": "e-tron Sportback",
      "fileName": "Audi e-tron Sportback.png",
      "imageUrl": "/cars/Audi/Audi%20e-tron%20Sportback.png"
    },
    {
      "modelName": "e-tron",
      "fileName": "Audi e-tron.png",
      "imageUrl": "/cars/Audi/Audi%20e-tron.png"
    },
    {
      "modelName": "Q3 Sportback",
      "fileName": "Audi Q3 Sportback.png",
      "imageUrl": "/cars/Audi/Audi%20Q3%20Sportback.png"
    },
    {
      "modelName": "Q3",
      "fileName": "Audi Q3.png",
      "imageUrl": "/cars/Audi/Audi%20Q3.png"
    },
    {
      "modelName": "Q5",
      "fileName": "Audi Q5.png",
      "imageUrl": "/cars/Audi/Audi%20Q5.png"
    },
    {
      "modelName": "Q7",
      "fileName": "Audi Q7.png",
      "imageUrl": "/cars/Audi/Audi%20Q7.png"
    },
    {
      "modelName": "Q8 e-tron",
      "fileName": "Audi Q8 e-tron.png",
      "imageUrl": "/cars/Audi/Audi%20Q8%20e-tron.png"
    },
    {
      "modelName": "Q8 Sportback e-tron",
      "fileName": "Audi Q8 Sportback e-tron.png",
      "imageUrl": "/cars/Audi/Audi%20Q8%20Sportback%20e-tron.png"
    },
    {
      "modelName": "Q8",
      "fileName": "Audi Q8.png",
      "imageUrl": "/cars/Audi/Audi%20Q8.png"
    },
    {
      "modelName": "RS Q8 Performance",
      "fileName": "Audi RS Q8 Performance.png",
      "imageUrl": "/cars/Audi/Audi%20RS%20Q8%20Performance.png"
    },
    {
      "modelName": "RS5",
      "fileName": "Audi RS5.png",
      "imageUrl": "/cars/Audi/Audi%20RS5.png"
    },
    {
      "modelName": "S5 Sportback",
      "fileName": "Audi S5 Sportback.png",
      "imageUrl": "/cars/Audi/Audi%20S5%20Sportback.png"
    },
    {
      "modelName": "SQ8",
      "fileName": "Audi SQ8.png",
      "imageUrl": "/cars/Audi/Audi%20SQ8.png"
    }
  ],
  "Bentley": [
    {
      "modelName": "Bentayga",
      "fileName": "Bentley Bentayga.png",
      "imageUrl": "/cars/Bentley/Bentley%20Bentayga.png"
    }
  ],
  "BMW": [
    {
      "modelName": "2 Series Gran Coupe",
      "fileName": "BMW 2 Series Gran Coupe.png",
      "imageUrl": "/cars/BMW/BMW%202%20Series%20Gran%20Coupe.png"
    },
    {
      "modelName": "3 Series LWB",
      "fileName": "BMW 3 Series LWB.png",
      "imageUrl": "/cars/BMW/BMW%203%20Series%20LWB.png"
    },
    {
      "modelName": "5-Series LWB",
      "fileName": "BMW 5-Series LWB.png",
      "imageUrl": "/cars/BMW/BMW%205-Series%20LWB.png"
    },
    {
      "modelName": "7 Series",
      "fileName": "BMW 7 Series.png",
      "imageUrl": "/cars/BMW/BMW%207%20Series.png"
    },
    {
      "modelName": "i5 LWB",
      "fileName": "BMW i5 LWB.png",
      "imageUrl": "/cars/BMW/BMW%20i5%20LWB.png"
    },
    {
      "modelName": "i5",
      "fileName": "BMW i5.png",
      "imageUrl": "/cars/BMW/BMW%20i5.png"
    },
    {
      "modelName": "i7",
      "fileName": "BMW i7.png",
      "imageUrl": "/cars/BMW/BMW%20i7.png"
    },
    {
      "modelName": "iX",
      "fileName": "BMW iX.png",
      "imageUrl": "/cars/BMW/BMW%20iX.png"
    },
    {
      "modelName": "iX1 LWB",
      "fileName": "BMW iX1 LWB.png",
      "imageUrl": "/cars/BMW/BMW%20iX1%20LWB.png"
    },
    {
      "modelName": "M2",
      "fileName": "BMW M2.png",
      "imageUrl": "/cars/BMW/BMW%20M2.png"
    },
    {
      "modelName": "M340i",
      "fileName": "BMW M340i.png",
      "imageUrl": "/cars/BMW/BMW%20M340i.png"
    },
    {
      "modelName": "M4",
      "fileName": "BMW M4.png",
      "imageUrl": "/cars/BMW/BMW%20M4.png"
    },
    {
      "modelName": "M440i",
      "fileName": "BMW M440i.png",
      "imageUrl": "/cars/BMW/BMW%20M440i.png"
    },
    {
      "modelName": "M5",
      "fileName": "BMW M5.png",
      "imageUrl": "/cars/BMW/BMW%20M5.png"
    },
    {
      "modelName": "X1 LWB",
      "fileName": "BMW X1 LWB.png",
      "imageUrl": "/cars/BMW/BMW%20X1%20LWB.png"
    },
    {
      "modelName": "X1",
      "fileName": "BMW X1.png",
      "imageUrl": "/cars/BMW/BMW%20X1.png"
    },
    {
      "modelName": "X3",
      "fileName": "BMW X3.png",
      "imageUrl": "/cars/BMW/BMW%20X3.png"
    },
    {
      "modelName": "X5",
      "fileName": "BMW X5.png",
      "imageUrl": "/cars/BMW/BMW%20X5.png"
    },
    {
      "modelName": "X6",
      "fileName": "BMW X6.png",
      "imageUrl": "/cars/BMW/BMW%20X6.png"
    },
    {
      "modelName": "X7",
      "fileName": "BMW X7.png",
      "imageUrl": "/cars/BMW/BMW%20X7.png"
    },
    {
      "modelName": "XM",
      "fileName": "BMW XM.png",
      "imageUrl": "/cars/BMW/BMW%20XM.png"
    }
  ],
  "BYD": [
    {
      "modelName": "Atto 3",
      "fileName": "BYD Atto 3.png",
      "imageUrl": "/cars/BYD/BYD%20Atto%203.png"
    },
    {
      "modelName": "eMax 7",
      "fileName": "BYD eMax 7.png",
      "imageUrl": "/cars/BYD/BYD%20eMax%207.png"
    },
    {
      "modelName": "Seal",
      "fileName": "BYD Seal.png",
      "imageUrl": "/cars/BYD/BYD%20Seal.png"
    },
    {
      "modelName": "Sealion 7",
      "fileName": "BYD Sealion 7.png",
      "imageUrl": "/cars/BYD/BYD%20Sealion%207.png"
    }
  ],
  "Citroen": [
    {
      "modelName": "Aircross X",
      "fileName": "Citroen Aircross X.png",
      "imageUrl": "/cars/Citroen/Citroen%20Aircross%20X.png"
    },
    {
      "modelName": "Basalt X",
      "fileName": "Citroen Basalt X.png",
      "imageUrl": "/cars/Citroen/Citroen%20Basalt%20X.png"
    },
    {
      "modelName": "C3 X",
      "fileName": "Citroen C3 X.png",
      "imageUrl": "/cars/Citroen/Citroen%20C3%20X.png"
    },
    {
      "modelName": "C5 Aircross",
      "fileName": "Citroen C5 Aircross.png",
      "imageUrl": "/cars/Citroen/Citroen%20C5%20Aircross.png"
    },
    {
      "modelName": "eC3 X",
      "fileName": "Citroen eC3 X.png",
      "imageUrl": "/cars/Citroen/Citroen%20eC3%20X.png"
    }
  ],
  "Ferrari": [
    {
      "modelName": "296 GTB",
      "fileName": "Ferrari 296 GTB.png",
      "imageUrl": "/cars/Ferrari/Ferrari%20296%20GTB.png"
    },
    {
      "modelName": "296 GTS",
      "fileName": "Ferrari 296 GTS.png",
      "imageUrl": "/cars/Ferrari/Ferrari%20296%20GTS.png"
    },
    {
      "modelName": "849 Testarossa",
      "fileName": "Ferrari 849 Testarossa.png",
      "imageUrl": "/cars/Ferrari/Ferrari%20849%20Testarossa.png"
    },
    {
      "modelName": "Amalfi Spider",
      "fileName": "Ferrari Amalfi Spider.png",
      "imageUrl": "/cars/Ferrari/Ferrari%20Amalfi%20Spider.png"
    },
    {
      "modelName": "F8 Tributo",
      "fileName": "Ferrari F8 Tributo.png",
      "imageUrl": "/cars/Ferrari/Ferrari%20F8%20Tributo.png"
    },
    {
      "modelName": "Portofino",
      "fileName": "Ferrari Portofino.png",
      "imageUrl": "/cars/Ferrari/Ferrari%20Portofino.png"
    },
    {
      "modelName": "Purosangue SUV",
      "fileName": "Ferrari Purosangue SUV.png",
      "imageUrl": "/cars/Ferrari/Ferrari%20Purosangue%20SUV.png"
    },
    {
      "modelName": "Roma",
      "fileName": "Ferrari Roma.png",
      "imageUrl": "/cars/Ferrari/Ferrari%20Roma.png"
    }
  ],
  "Force Motors": [
    {
      "modelName": "Gurkha",
      "fileName": "Force Motors Gurkha.png",
      "imageUrl": "/cars/Force%20Motors/Force%20Motors%20Gurkha.png"
    },
    {
      "modelName": "Trax Cruiser",
      "fileName": "Force Motors Trax Cruiser.png",
      "imageUrl": "/cars/Force%20Motors/Force%20Motors%20Trax%20Cruiser.png"
    }
  ],
  "Honda": [
    {
      "modelName": "Amaze 2nd Gen",
      "fileName": "Honda Amaze 2nd Gen.png",
      "imageUrl": "/cars/Honda/Honda%20Amaze%202nd%20Gen.png"
    },
    {
      "modelName": "Amaze",
      "fileName": "Honda Amaze.png",
      "imageUrl": "/cars/Honda/Honda%20Amaze.png"
    },
    {
      "modelName": "City",
      "fileName": "Honda City.png",
      "imageUrl": "/cars/Honda/Honda%20City.png"
    },
    {
      "modelName": "Elevate",
      "fileName": "Honda Elevate.png",
      "imageUrl": "/cars/Honda/Honda%20Elevate.png"
    },
    {
      "modelName": "ZR-V",
      "fileName": "Honda ZR-V.png",
      "imageUrl": "/cars/Honda/Honda%20ZR-V.png"
    }
  ],
  "Hyundai": [
    {
      "modelName": "Alcazar",
      "fileName": "Hyundai Alcazar.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Alcazar.png"
    },
    {
      "modelName": "Aura",
      "fileName": "Hyundai Aura.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Aura.png"
    },
    {
      "modelName": "Bayon",
      "fileName": "Hyundai Bayon.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Bayon.png"
    },
    {
      "modelName": "Creta Electric",
      "fileName": "Hyundai Creta Electric.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Creta%20Electric.png"
    },
    {
      "modelName": "Creta N Line",
      "fileName": "Hyundai Creta N Line.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Creta%20N%20Line.png"
    },
    {
      "modelName": "Creta",
      "fileName": "Hyundai Creta.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Creta.png"
    },
    {
      "modelName": "Exter",
      "fileName": "Hyundai Exter.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Exter.png"
    },
    {
      "modelName": "Grand i10 Nios",
      "fileName": "Hyundai Grand i10 Nios.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Grand%20i10%20Nios.png"
    },
    {
      "modelName": "i20 N Line",
      "fileName": "Hyundai i20 N Line.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20i20%20N%20Line.png"
    },
    {
      "modelName": "i20",
      "fileName": "Hyundai i20.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20i20.png"
    },
    {
      "modelName": "Ioniq 5",
      "fileName": "Hyundai Ioniq 5.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Ioniq%205.png"
    },
    {
      "modelName": "Venue N Line",
      "fileName": "Hyundai Venue N Line.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Venue%20N%20Line.png"
    },
    {
      "modelName": "Venue",
      "fileName": "Hyundai Venue.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Venue.png"
    },
    {
      "modelName": "Verna",
      "fileName": "Hyundai Verna.png",
      "imageUrl": "/cars/Hyundai/Hyundai%20Verna.png"
    }
  ],
  "Isuzu": [
    {
      "modelName": "Hi-Lander",
      "fileName": "Isuzu Hi-Lander.png",
      "imageUrl": "/cars/Isuzu/Isuzu%20Hi-Lander.png"
    },
    {
      "modelName": "MU-X",
      "fileName": "Isuzu MU-X.png",
      "imageUrl": "/cars/Isuzu/Isuzu%20MU-X.png"
    },
    {
      "modelName": "V-Cross",
      "fileName": "Isuzu V-Cross.png",
      "imageUrl": "/cars/Isuzu/Isuzu%20V-Cross.png"
    }
  ],
  "Jaguar": [
    {
      "modelName": "F-Pace",
      "fileName": "Jaguar F-Pace.png",
      "imageUrl": "/cars/Jaguar/Jaguar%20F-Pace.png"
    }
  ],
  "Jeep": [
    {
      "modelName": "Compass",
      "fileName": "Jeep Compass.png",
      "imageUrl": "/cars/Jeep/Jeep%20Compass.png"
    },
    {
      "modelName": "Grand Cherokee",
      "fileName": "Jeep Grand Cherokee.png",
      "imageUrl": "/cars/Jeep/Jeep%20Grand%20Cherokee.png"
    },
    {
      "modelName": "Meridian",
      "fileName": "Jeep Meridian.png",
      "imageUrl": "/cars/Jeep/Jeep%20Meridian.png"
    },
    {
      "modelName": "Wrangler",
      "fileName": "Jeep Wrangler.png",
      "imageUrl": "/cars/Jeep/Jeep%20Wrangler.png"
    }
  ],
  "Kia": [
    {
      "modelName": "Carens Clavis EV",
      "fileName": "Kia Carens Clavis EV.png",
      "imageUrl": "/cars/Kia/Kia%20Carens%20Clavis%20EV.png"
    },
    {
      "modelName": "Carens Clavis",
      "fileName": "Kia Carens Clavis.png",
      "imageUrl": "/cars/Kia/Kia%20Carens%20Clavis.png"
    },
    {
      "modelName": "Carens",
      "fileName": "Kia Carens.png",
      "imageUrl": "/cars/Kia/Kia%20Carens.png"
    },
    {
      "modelName": "Carnival",
      "fileName": "Kia Carnival.png",
      "imageUrl": "/cars/Kia/Kia%20Carnival.png"
    },
    {
      "modelName": "EV6",
      "fileName": "Kia EV6.png",
      "imageUrl": "/cars/Kia/Kia%20EV6.png"
    },
    {
      "modelName": "EV9",
      "fileName": "Kia EV9.png",
      "imageUrl": "/cars/Kia/Kia%20EV9.png"
    },
    {
      "modelName": "Seltos",
      "fileName": "Kia Seltos.png",
      "imageUrl": "/cars/Kia/Kia%20Seltos.png"
    },
    {
      "modelName": "Sonet",
      "fileName": "Kia Sonet.png",
      "imageUrl": "/cars/Kia/Kia%20Sonet.png"
    },
    {
      "modelName": "Sorento",
      "fileName": "Kia Sorento.png",
      "imageUrl": "/cars/Kia/Kia%20Sorento.png"
    },
    {
      "modelName": "Syros EV",
      "fileName": "Kia Syros EV.png",
      "imageUrl": "/cars/Kia/Kia%20Syros%20EV.png"
    },
    {
      "modelName": "Syros",
      "fileName": "Kia Syros.png",
      "imageUrl": "/cars/Kia/Kia%20Syros.png"
    }
  ],
  "Lamborghini": [
    {
      "modelName": "Revuelto",
      "fileName": "Lamborghini Revuelto.png",
      "imageUrl": "/cars/Lamborghini/Lamborghini%20Revuelto.png"
    },
    {
      "modelName": "Temerario",
      "fileName": "Lamborghini Temerario.png",
      "imageUrl": "/cars/Lamborghini/Lamborghini%20Temerario.png"
    },
    {
      "modelName": "Urus SE",
      "fileName": "Lamborghini Urus SE.png",
      "imageUrl": "/cars/Lamborghini/Lamborghini%20Urus%20SE.png"
    }
  ],
  "Land Rover": [
    {
      "modelName": "Defender",
      "fileName": "Land Rover Defender.png",
      "imageUrl": "/cars/Land%20Rover/Land%20Rover%20Defender.png"
    },
    {
      "modelName": "Discovery Sport",
      "fileName": "Land Rover Discovery Sport.png",
      "imageUrl": "/cars/Land%20Rover/Land%20Rover%20Discovery%20Sport.png"
    },
    {
      "modelName": "Discovery",
      "fileName": "Land Rover Discovery.png",
      "imageUrl": "/cars/Land%20Rover/Land%20Rover%20Discovery.png"
    },
    {
      "modelName": "Range Rover Evoque",
      "fileName": "Land Rover Range Rover Evoque.png",
      "imageUrl": "/cars/Land%20Rover/Land%20Rover%20Range%20Rover%20Evoque.png"
    },
    {
      "modelName": "Range Rover Sport",
      "fileName": "Land Rover Range Rover Sport.png",
      "imageUrl": "/cars/Land%20Rover/Land%20Rover%20Range%20Rover%20Sport.png"
    },
    {
      "modelName": "Range Rover Velar",
      "fileName": "Land Rover Range Rover Velar.png",
      "imageUrl": "/cars/Land%20Rover/Land%20Rover%20Range%20Rover%20Velar.png"
    },
    {
      "modelName": "Range Rover",
      "fileName": "Land Rover Range Rover.png",
      "imageUrl": "/cars/Land%20Rover/Land%20Rover%20Range%20Rover.png"
    }
  ],
  "Lexus": [
    {
      "modelName": "ES 350h",
      "fileName": "Lexus ES 350h.png",
      "imageUrl": "/cars/Lexus/Lexus%20ES%20350h.png"
    },
    {
      "modelName": "ES 500e",
      "fileName": "Lexus ES 500e.png",
      "imageUrl": "/cars/Lexus/Lexus%20ES%20500e.png"
    },
    {
      "modelName": "LM",
      "fileName": "Lexus LM.png",
      "imageUrl": "/cars/Lexus/Lexus%20LM.png"
    },
    {
      "modelName": "LX",
      "fileName": "Lexus LX.png",
      "imageUrl": "/cars/Lexus/Lexus%20LX.png"
    },
    {
      "modelName": "NX",
      "fileName": "Lexus NX.png",
      "imageUrl": "/cars/Lexus/Lexus%20NX.png"
    },
    {
      "modelName": "RX",
      "fileName": "Lexus RX.png",
      "imageUrl": "/cars/Lexus/Lexus%20RX.png"
    }
  ],
  "Lotus": [
    {
      "modelName": "Eletre",
      "fileName": "Lotus Eletre.png",
      "imageUrl": "/cars/Lotus/Lotus%20Eletre.png"
    },
    {
      "modelName": "Emeya",
      "fileName": "Lotus Emeya.png",
      "imageUrl": "/cars/Lotus/Lotus%20Emeya.png"
    },
    {
      "modelName": "Emira",
      "fileName": "Lotus Emira.png",
      "imageUrl": "/cars/Lotus/Lotus%20Emira.png"
    }
  ],
  "Mahindra": [
    {
      "modelName": "BE 6 Sporteq",
      "fileName": "Mahindra BE 6 Sporteq.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20BE%206%20Sporteq.png"
    },
    {
      "modelName": "Bolero Neo Plus",
      "fileName": "Mahindra Bolero Neo Plus.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20Bolero%20Neo%20Plus.png"
    },
    {
      "modelName": "Bolero Neo",
      "fileName": "Mahindra Bolero Neo.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20Bolero%20Neo.png"
    },
    {
      "modelName": "Bolero",
      "fileName": "Mahindra Bolero.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20Bolero.png"
    },
    {
      "modelName": "Scorpio N",
      "fileName": "Mahindra Scorpio N.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20Scorpio%20N.png"
    },
    {
      "modelName": "Scorpio",
      "fileName": "Mahindra Scorpio.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20Scorpio.png"
    },
    {
      "modelName": "Thar OG",
      "fileName": "Mahindra Thar OG.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20Thar%20OG.png"
    },
    {
      "modelName": "Thar Roxx",
      "fileName": "Mahindra Thar Roxx.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20Thar%20Roxx.png"
    },
    {
      "modelName": "XEV 9e",
      "fileName": "Mahindra XEV 9e.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20XEV%209e.png"
    },
    {
      "modelName": "XEV 9S",
      "fileName": "Mahindra XEV 9S.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20XEV%209S.png"
    },
    {
      "modelName": "XUV 3XO EV",
      "fileName": "Mahindra XUV 3XO EV.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20XUV%203XO%20EV.png"
    },
    {
      "modelName": "XUV 3XO",
      "fileName": "Mahindra XUV 3XO.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20XUV%203XO.png"
    },
    {
      "modelName": "XUV 7XO",
      "fileName": "Mahindra XUV 7XO.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20XUV%207XO.png"
    },
    {
      "modelName": "XUV400",
      "fileName": "Mahindra XUV400.png",
      "imageUrl": "/cars/Mahindra/Mahindra%20XUV400.png"
    }
  ],
  "Maruti Suzuki": [
    {
      "modelName": "Alto K10",
      "fileName": "Maruti Suzuki Alto K10.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Alto%20K10.png"
    },
    {
      "modelName": "Baleno",
      "fileName": "Maruti Suzuki Baleno.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Baleno.png"
    },
    {
      "modelName": "Brezza",
      "fileName": "Maruti Suzuki Brezza.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Brezza.png"
    },
    {
      "modelName": "Celerio",
      "fileName": "Maruti Suzuki Celerio.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Celerio.png"
    },
    {
      "modelName": "Dzire",
      "fileName": "Maruti Suzuki Dzire.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Dzire.png"
    },
    {
      "modelName": "e Vitara",
      "fileName": "Maruti Suzuki e Vitara.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20e%20Vitara.png"
    },
    {
      "modelName": "Eeco",
      "fileName": "Maruti Suzuki Eeco.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Eeco.png"
    },
    {
      "modelName": "Ertiga",
      "fileName": "Maruti Suzuki Ertiga.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Ertiga.png"
    },
    {
      "modelName": "Fronx",
      "fileName": "Maruti Suzuki Fronx.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Fronx.png"
    },
    {
      "modelName": "Grand Vitara",
      "fileName": "Maruti Suzuki Grand Vitara.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Grand%20Vitara.png"
    },
    {
      "modelName": "Invicto",
      "fileName": "Maruti Suzuki Invicto.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Invicto.png"
    },
    {
      "modelName": "Jimny",
      "fileName": "Maruti Suzuki Jimny.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Jimny.png"
    },
    {
      "modelName": "S-Presso",
      "fileName": "Maruti Suzuki S-Presso.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20S-Presso.png"
    },
    {
      "modelName": "Swift",
      "fileName": "Maruti Suzuki Swift.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Swift.png"
    },
    {
      "modelName": "Victoris",
      "fileName": "Maruti Suzuki Victoris.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Victoris.png"
    },
    {
      "modelName": "Wagon R",
      "fileName": "Maruti Suzuki Wagon R.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20Wagon%20R.png"
    },
    {
      "modelName": "XL6",
      "fileName": "Maruti Suzuki XL6.png",
      "imageUrl": "/cars/Maruti%20Suzuki/Maruti%20Suzuki%20XL6.png"
    }
  ],
  "Maserati": [
    {
      "modelName": "Ghibli",
      "fileName": "Maserati Ghibli.png",
      "imageUrl": "/cars/Maserati/Maserati%20Ghibli.png"
    },
    {
      "modelName": "GranCabrio Folgore EV",
      "fileName": "Maserati GranCabrio Folgore EV.png",
      "imageUrl": "/cars/Maserati/Maserati%20GranCabrio%20Folgore%20EV.png"
    },
    {
      "modelName": "GranCabrio",
      "fileName": "Maserati GranCabrio.png",
      "imageUrl": "/cars/Maserati/Maserati%20GranCabrio.png"
    },
    {
      "modelName": "GranTurismo Folgore EV",
      "fileName": "Maserati GranTurismo Folgore EV.png",
      "imageUrl": "/cars/Maserati/Maserati%20GranTurismo%20Folgore%20EV.png"
    },
    {
      "modelName": "GranTurismo",
      "fileName": "Maserati GranTurismo.png",
      "imageUrl": "/cars/Maserati/Maserati%20GranTurismo.png"
    },
    {
      "modelName": "Grecale Folgore EV",
      "fileName": "Maserati Grecale Folgore EV.png",
      "imageUrl": "/cars/Maserati/Maserati%20Grecale%20Folgore%20EV.png"
    },
    {
      "modelName": "Grecale",
      "fileName": "Maserati Grecale.png",
      "imageUrl": "/cars/Maserati/Maserati%20Grecale.png"
    },
    {
      "modelName": "GT2 Stradale",
      "fileName": "Maserati GT2 Stradale.png",
      "imageUrl": "/cars/Maserati/Maserati%20GT2%20Stradale.png"
    },
    {
      "modelName": "Levante",
      "fileName": "Maserati Levante.png",
      "imageUrl": "/cars/Maserati/Maserati%20Levante.png"
    },
    {
      "modelName": "MC20",
      "fileName": "Maserati MC20.png",
      "imageUrl": "/cars/Maserati/Maserati%20MC20.png"
    },
    {
      "modelName": "MCPura",
      "fileName": "Maserati MCPura.png",
      "imageUrl": "/cars/Maserati/Maserati%20MCPura.png"
    },
    {
      "modelName": "Quattroporte",
      "fileName": "Maserati Quattroporte.png",
      "imageUrl": "/cars/Maserati/Maserati%20Quattroporte.png"
    }
  ],
  "McLaren": [
    {
      "modelName": "720S",
      "fileName": "McLaren 720S.png",
      "imageUrl": "/cars/McLaren/McLaren%20720S.png"
    },
    {
      "modelName": "750S",
      "fileName": "McLaren 750S.png",
      "imageUrl": "/cars/McLaren/McLaren%20750S.png"
    },
    {
      "modelName": "GT",
      "fileName": "McLaren GT.png",
      "imageUrl": "/cars/McLaren/McLaren%20GT.png"
    }
  ],
  "Mercedes-Benz": [
    {
      "modelName": "AMG A45 S",
      "fileName": "Mercedes-Benz AMG A45 S.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20A45%20S.png"
    },
    {
      "modelName": "AMG C 43",
      "fileName": "Mercedes-Benz AMG C 43.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20C%2043.png"
    },
    {
      "modelName": "AMG C 63 S E Performance",
      "fileName": "Mercedes-Benz AMG C 63 S E Performance.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20C%2063%20S%20E%20Performance.png"
    },
    {
      "modelName": "AMG CLE",
      "fileName": "Mercedes-Benz AMG CLE.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20CLE.png"
    },
    {
      "modelName": "AMG E53 Cabriolet",
      "fileName": "Mercedes-Benz AMG E53 Cabriolet.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20E53%20Cabriolet.png"
    },
    {
      "modelName": "AMG E53 PHEV",
      "fileName": "Mercedes-Benz AMG E53 PHEV.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20E53%20PHEV.png"
    },
    {
      "modelName": "AMG EQS",
      "fileName": "Mercedes-Benz AMG EQS.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20EQS.png"
    },
    {
      "modelName": "AMG G-Class",
      "fileName": "Mercedes-Benz AMG G-Class.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20G-Class.png"
    },
    {
      "modelName": "AMG GLA35",
      "fileName": "Mercedes-Benz AMG GLA35.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20GLA35.png"
    },
    {
      "modelName": "AMG GLC43 Coupe",
      "fileName": "Mercedes-Benz AMG GLC43 Coupe.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20GLC43%20Coupe.png"
    },
    {
      "modelName": "AMG GLE Coupe",
      "fileName": "Mercedes-Benz AMG GLE Coupe.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20GLE%20Coupe.png"
    },
    {
      "modelName": "AMG GT 63 S 4Matic Plus",
      "fileName": "Mercedes-Benz AMG GT 63 S 4Matic Plus.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20GT%2063%20S%204Matic%20Plus.png"
    },
    {
      "modelName": "AMG GT 63 S E Performance",
      "fileName": "Mercedes-Benz AMG GT 63 S E Performance.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20GT%2063%20S%20E%20Performance.png"
    },
    {
      "modelName": "AMG GT 63",
      "fileName": "Mercedes-Benz AMG GT 63.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20GT%2063.png"
    },
    {
      "modelName": "AMG S 63 E Performance",
      "fileName": "Mercedes-Benz AMG S 63 E Performance.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20S%2063%20E%20Performance.png"
    },
    {
      "modelName": "AMG SL55 Roadster",
      "fileName": "Mercedes-Benz AMG SL55 Roadster.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20AMG%20SL55%20Roadster.png"
    },
    {
      "modelName": "C-Class",
      "fileName": "Mercedes-Benz C-Class.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20C-Class.png"
    },
    {
      "modelName": "CLA EV",
      "fileName": "Mercedes-Benz CLA EV.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20CLA%20EV.png"
    },
    {
      "modelName": "CLE Cabriolet",
      "fileName": "Mercedes-Benz CLE Cabriolet.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20CLE%20Cabriolet.png"
    },
    {
      "modelName": "E-Class",
      "fileName": "Mercedes-Benz E-Class.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20E-Class.png"
    },
    {
      "modelName": "EQE SUV",
      "fileName": "Mercedes-Benz EQE SUV.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20EQE%20SUV.png"
    },
    {
      "modelName": "EQS SUV",
      "fileName": "Mercedes-Benz EQS SUV.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20EQS%20SUV.png"
    },
    {
      "modelName": "EQS",
      "fileName": "Mercedes-Benz EQS.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20EQS.png"
    },
    {
      "modelName": "G-Class Electric",
      "fileName": "Mercedes-Benz G-Class Electric.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20G-Class%20Electric.png"
    },
    {
      "modelName": "G-Class",
      "fileName": "Mercedes-Benz G-Class.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20G-Class.png"
    },
    {
      "modelName": "GLA",
      "fileName": "Mercedes-Benz GLA.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20GLA.png"
    },
    {
      "modelName": "GLC Electric",
      "fileName": "Mercedes-Benz GLC Electric.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20GLC%20Electric.png"
    },
    {
      "modelName": "GLC",
      "fileName": "Mercedes-Benz GLC.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20GLC.png"
    },
    {
      "modelName": "GLE",
      "fileName": "Mercedes-Benz GLE.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20GLE.png"
    },
    {
      "modelName": "GLS",
      "fileName": "Mercedes-Benz GLS.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20GLS.png"
    },
    {
      "modelName": "Maybach EQS SUV",
      "fileName": "Mercedes-Benz Maybach EQS SUV.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20Maybach%20EQS%20SUV.png"
    },
    {
      "modelName": "Maybach GLS",
      "fileName": "Mercedes-Benz Maybach GLS.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20Maybach%20GLS.png"
    },
    {
      "modelName": "Maybach S-Class",
      "fileName": "Mercedes-Benz Maybach S-Class.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20Maybach%20S-Class.png"
    },
    {
      "modelName": "Maybach SL 680",
      "fileName": "Mercedes-Benz Maybach SL 680.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20Maybach%20SL%20680.png"
    },
    {
      "modelName": "S-Class",
      "fileName": "Mercedes-Benz S-Class.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20S-Class.png"
    },
    {
      "modelName": "V-Class",
      "fileName": "Mercedes-Benz V-Class.png",
      "imageUrl": "/cars/Mercedes-Benz/Mercedes-Benz%20V-Class.png"
    }
  ],
  "MG": [
    {
      "modelName": "Astor",
      "fileName": "MG Astor.png",
      "imageUrl": "/cars/MG/MG%20Astor.png"
    },
    {
      "modelName": "Comet EV",
      "fileName": "MG Comet EV.png",
      "imageUrl": "/cars/MG/MG%20Comet%20EV.png"
    },
    {
      "modelName": "Cyberster",
      "fileName": "MG Cyberster.png",
      "imageUrl": "/cars/MG/MG%20Cyberster.png"
    },
    {
      "modelName": "Hector Plus",
      "fileName": "MG Hector Plus.png",
      "imageUrl": "/cars/MG/MG%20Hector%20Plus.png"
    },
    {
      "modelName": "Hector Tomahawk EV",
      "fileName": "MG Hector Tomahawk EV.png",
      "imageUrl": "/cars/MG/MG%20Hector%20Tomahawk%20EV.png"
    },
    {
      "modelName": "Hector Tomahawk PHEV",
      "fileName": "MG Hector Tomahawk PHEV.png",
      "imageUrl": "/cars/MG/MG%20Hector%20Tomahawk%20PHEV.png"
    },
    {
      "modelName": "Hector",
      "fileName": "MG Hector.png",
      "imageUrl": "/cars/MG/MG%20Hector.png"
    },
    {
      "modelName": "M9",
      "fileName": "MG M9.png",
      "imageUrl": "/cars/MG/MG%20M9.png"
    },
    {
      "modelName": "Majestor",
      "fileName": "MG Majestor.png",
      "imageUrl": "/cars/MG/MG%20Majestor.png"
    },
    {
      "modelName": "Windsor EV",
      "fileName": "MG Windsor EV.png",
      "imageUrl": "/cars/MG/MG%20Windsor%20EV.png"
    },
    {
      "modelName": "ZS EV",
      "fileName": "MG ZS EV.png",
      "imageUrl": "/cars/MG/MG%20ZS%20EV.png"
    }
  ],
  "Mini": [
    {
      "modelName": "Cooper S Convertible",
      "fileName": "Mini Cooper S Convertible.png",
      "imageUrl": "/cars/Mini/Mini%20Cooper%20S%20Convertible.png"
    },
    {
      "modelName": "Cooper SE",
      "fileName": "Mini Cooper SE.png",
      "imageUrl": "/cars/Mini/Mini%20Cooper%20SE.png"
    },
    {
      "modelName": "Cooper",
      "fileName": "Mini Cooper.png",
      "imageUrl": "/cars/Mini/Mini%20Cooper.png"
    },
    {
      "modelName": "Countryman C",
      "fileName": "Mini Countryman C.png",
      "imageUrl": "/cars/Mini/Mini%20Countryman%20C.png"
    },
    {
      "modelName": "Countryman Electric",
      "fileName": "Mini Countryman Electric.png",
      "imageUrl": "/cars/Mini/Mini%20Countryman%20Electric.png"
    },
    {
      "modelName": "Countryman",
      "fileName": "Mini Countryman.png",
      "imageUrl": "/cars/Mini/Mini%20Countryman.png"
    }
  ],
  "Nissan": [
    {
      "modelName": "Gravite",
      "fileName": "Nissan Gravite.png",
      "imageUrl": "/cars/Nissan/Nissan%20Gravite.png"
    },
    {
      "modelName": "Magnite",
      "fileName": "Nissan Magnite.png",
      "imageUrl": "/cars/Nissan/Nissan%20Magnite.png"
    },
    {
      "modelName": "Tekton",
      "fileName": "Nissan Tekton.png",
      "imageUrl": "/cars/Nissan/Nissan%20Tekton.png"
    },
    {
      "modelName": "X-Trail",
      "fileName": "Nissan X-Trail.png",
      "imageUrl": "/cars/Nissan/Nissan%20X-Trail.png"
    }
  ],
  "Porsche": [
    {
      "modelName": "911",
      "fileName": "Porsche 911.png",
      "imageUrl": "/cars/Porsche/Porsche%20911.png"
    },
    {
      "modelName": "Cayenne Coupe",
      "fileName": "Porsche Cayenne Coupe.png",
      "imageUrl": "/cars/Porsche/Porsche%20Cayenne%20Coupe.png"
    },
    {
      "modelName": "Cayenne Electric",
      "fileName": "Porsche Cayenne Electric.png",
      "imageUrl": "/cars/Porsche/Porsche%20Cayenne%20Electric.png"
    },
    {
      "modelName": "Cayenne",
      "fileName": "Porsche Cayenne.png",
      "imageUrl": "/cars/Porsche/Porsche%20Cayenne.png"
    },
    {
      "modelName": "Macan Electric",
      "fileName": "Porsche Macan Electric.png",
      "imageUrl": "/cars/Porsche/Porsche%20Macan%20Electric.png"
    },
    {
      "modelName": "Macan",
      "fileName": "Porsche Macan.png",
      "imageUrl": "/cars/Porsche/Porsche%20Macan.png"
    },
    {
      "modelName": "Panamera",
      "fileName": "Porsche Panamera.png",
      "imageUrl": "/cars/Porsche/Porsche%20Panamera.png"
    },
    {
      "modelName": "Taycan",
      "fileName": "Porsche Taycan.png",
      "imageUrl": "/cars/Porsche/Porsche%20Taycan.png"
    }
  ],
  "Renault": [
    {
      "modelName": "Duster",
      "fileName": "Renault Duster.png",
      "imageUrl": "/cars/Renault/Renault%20Duster.png"
    },
    {
      "modelName": "Kiger",
      "fileName": "Renault Kiger.png",
      "imageUrl": "/cars/Renault/Renault%20Kiger.png"
    },
    {
      "modelName": "Kwid",
      "fileName": "Renault Kwid.png",
      "imageUrl": "/cars/Renault/Renault%20Kwid.png"
    },
    {
      "modelName": "Triber",
      "fileName": "Renault Triber.png",
      "imageUrl": "/cars/Renault/Renault%20Triber.png"
    }
  ],
  "Rolls-Royce": [
    {
      "modelName": "Cullinan",
      "fileName": "Rolls-Royce Cullinan.png",
      "imageUrl": "/cars/Rolls-Royce/Rolls-Royce%20Cullinan.png"
    },
    {
      "modelName": "Phantom",
      "fileName": "Rolls-Royce Phantom.png",
      "imageUrl": "/cars/Rolls-Royce/Rolls-Royce%20Phantom.png"
    },
    {
      "modelName": "Spectre",
      "fileName": "Rolls-Royce Spectre.png",
      "imageUrl": "/cars/Rolls-Royce/Rolls-Royce%20Spectre.png"
    }
  ],
  "Skoda": [
    {
      "modelName": "Kodiaq RS",
      "fileName": "Skoda Kodiaq RS.png",
      "imageUrl": "/cars/Skoda/Skoda%20Kodiaq%20RS.png"
    },
    {
      "modelName": "Kodiaq",
      "fileName": "Skoda Kodiaq.png",
      "imageUrl": "/cars/Skoda/Skoda%20Kodiaq.png"
    },
    {
      "modelName": "Kushaq",
      "fileName": "Skoda Kushaq.png",
      "imageUrl": "/cars/Skoda/Skoda%20Kushaq.png"
    },
    {
      "modelName": "Kylaq",
      "fileName": "Skoda Kylaq.png",
      "imageUrl": "/cars/Skoda/Skoda%20Kylaq.png"
    },
    {
      "modelName": "Octavia RS",
      "fileName": "Skoda Octavia RS.png",
      "imageUrl": "/cars/Skoda/Skoda%20Octavia%20RS.png"
    },
    {
      "modelName": "Slavia",
      "fileName": "Skoda Slavia.png",
      "imageUrl": "/cars/Skoda/Skoda%20Slavia.png"
    }
  ],
  "Tata": [
    {
      "modelName": "Aeris",
      "fileName": "Tata Aeris.png",
      "imageUrl": "/cars/Tata/Tata%20Aeris.png"
    },
    {
      "modelName": "Altroz",
      "fileName": "Tata Altroz.png",
      "imageUrl": "/cars/Tata/Tata%20Altroz.png"
    },
    {
      "modelName": "Curvv EV",
      "fileName": "Tata Curvv EV.png",
      "imageUrl": "/cars/Tata/Tata%20Curvv%20EV.png"
    },
    {
      "modelName": "Curvv",
      "fileName": "Tata Curvv.png",
      "imageUrl": "/cars/Tata/Tata%20Curvv.png"
    },
    {
      "modelName": "Harrier EV",
      "fileName": "Tata Harrier EV.png",
      "imageUrl": "/cars/Tata/Tata%20Harrier%20EV.png"
    },
    {
      "modelName": "Harrier",
      "fileName": "Tata Harrier.png",
      "imageUrl": "/cars/Tata/Tata%20Harrier.png"
    },
    {
      "modelName": "Nexon EV",
      "fileName": "Tata Nexon EV.png",
      "imageUrl": "/cars/Tata/Tata%20Nexon%20EV.png"
    },
    {
      "modelName": "Nexon",
      "fileName": "Tata Nexon.png",
      "imageUrl": "/cars/Tata/Tata%20Nexon.png"
    },
    {
      "modelName": "Punch EV",
      "fileName": "Tata Punch EV.png",
      "imageUrl": "/cars/Tata/Tata%20Punch%20EV.png"
    },
    {
      "modelName": "Punch",
      "fileName": "Tata Punch.png",
      "imageUrl": "/cars/Tata/Tata%20Punch.png"
    },
    {
      "modelName": "Safari",
      "fileName": "Tata Safari.png",
      "imageUrl": "/cars/Tata/Tata%20Safari.png"
    },
    {
      "modelName": "Sierra EV",
      "fileName": "Tata Sierra EV.png",
      "imageUrl": "/cars/Tata/Tata%20Sierra%20EV.png"
    },
    {
      "modelName": "Sierra",
      "fileName": "Tata Sierra.png",
      "imageUrl": "/cars/Tata/Tata%20Sierra.png"
    },
    {
      "modelName": "Tiago EV",
      "fileName": "Tata Tiago EV.png",
      "imageUrl": "/cars/Tata/Tata%20Tiago%20EV.png"
    },
    {
      "modelName": "Tiago",
      "fileName": "Tata Tiago.png",
      "imageUrl": "/cars/Tata/Tata%20Tiago.png"
    },
    {
      "modelName": "Tigor EV",
      "fileName": "Tata Tigor EV.png",
      "imageUrl": "/cars/Tata/Tata%20Tigor%20EV.png"
    }
  ],
  "Tesla": [
    {
      "modelName": "Model Y L",
      "fileName": "Tesla Model Y L.png",
      "imageUrl": "/cars/Tesla/Tesla%20Model%20Y%20L.png"
    },
    {
      "modelName": "Model Y",
      "fileName": "Tesla Model Y.png",
      "imageUrl": "/cars/Tesla/Tesla%20Model%20Y.png"
    }
  ],
  "Toyota": [
    {
      "modelName": "Camry",
      "fileName": "Toyota Camry.png",
      "imageUrl": "/cars/Toyota/Toyota%20Camry.png"
    },
    {
      "modelName": "Fortuner Legender",
      "fileName": "Toyota Fortuner Legender.png",
      "imageUrl": "/cars/Toyota/Toyota%20Fortuner%20Legender.png"
    },
    {
      "modelName": "Fortuner",
      "fileName": "Toyota Fortuner.png",
      "imageUrl": "/cars/Toyota/Toyota%20Fortuner.png"
    },
    {
      "modelName": "Glanza",
      "fileName": "Toyota Glanza.png",
      "imageUrl": "/cars/Toyota/Toyota%20Glanza.png"
    },
    {
      "modelName": "Hilux",
      "fileName": "Toyota Hilux.png",
      "imageUrl": "/cars/Toyota/Toyota%20Hilux.png"
    },
    {
      "modelName": "Innova Crysta",
      "fileName": "Toyota Innova Crysta.png",
      "imageUrl": "/cars/Toyota/Toyota%20Innova%20Crysta.png"
    },
    {
      "modelName": "Innova Hycross",
      "fileName": "Toyota Innova Hycross.png",
      "imageUrl": "/cars/Toyota/Toyota%20Innova%20Hycross.png"
    },
    {
      "modelName": "Land Cruiser",
      "fileName": "Toyota Land Cruiser.png",
      "imageUrl": "/cars/Toyota/Toyota%20Land%20Cruiser.png"
    },
    {
      "modelName": "Rumion",
      "fileName": "Toyota Rumion.png",
      "imageUrl": "/cars/Toyota/Toyota%20Rumion.png"
    },
    {
      "modelName": "Urban Cruiser Ebella",
      "fileName": "Toyota Urban Cruiser Ebella.png",
      "imageUrl": "/cars/Toyota/Toyota%20Urban%20Cruiser%20Ebella.png"
    },
    {
      "modelName": "Urban Cruiser Hyryder",
      "fileName": "Toyota Urban Cruiser Hyryder.png",
      "imageUrl": "/cars/Toyota/Toyota%20Urban%20Cruiser%20Hyryder.png"
    },
    {
      "modelName": "Urban Cruiser Taisor",
      "fileName": "Toyota Urban Cruiser Taisor.png",
      "imageUrl": "/cars/Toyota/Toyota%20Urban%20Cruiser%20Taisor.png"
    },
    {
      "modelName": "Vellfire",
      "fileName": "Toyota Vellfire.png",
      "imageUrl": "/cars/Toyota/Toyota%20Vellfire.png"
    }
  ],
  "VinFast": [
    {
      "modelName": "VF 6",
      "fileName": "VinFast VF 6.png",
      "imageUrl": "/cars/VinFast/VinFast%20VF%206.png"
    },
    {
      "modelName": "VF 7",
      "fileName": "VinFast VF 7.png",
      "imageUrl": "/cars/VinFast/VinFast%20VF%207.png"
    },
    {
      "modelName": "VF MPV 7",
      "fileName": "VinFast VF MPV 7.png",
      "imageUrl": "/cars/VinFast/VinFast%20VF%20MPV%207.png"
    }
  ],
  "Volkswagen": [
    {
      "modelName": "Golf GTI",
      "fileName": "Volkswagen Golf GTI.png",
      "imageUrl": "/cars/Volkswagen/Volkswagen%20Golf%20GTI.png"
    },
    {
      "modelName": "Taigun",
      "fileName": "Volkswagen Taigun.png",
      "imageUrl": "/cars/Volkswagen/Volkswagen%20Taigun.png"
    },
    {
      "modelName": "Tayron",
      "fileName": "Volkswagen Tayron.png",
      "imageUrl": "/cars/Volkswagen/Volkswagen%20Tayron.png"
    },
    {
      "modelName": "Tiguan R-Line",
      "fileName": "Volkswagen Tiguan R-Line.png",
      "imageUrl": "/cars/Volkswagen/Volkswagen%20Tiguan%20R-Line.png"
    },
    {
      "modelName": "Virtus",
      "fileName": "Volkswagen Virtus.png",
      "imageUrl": "/cars/Volkswagen/Volkswagen%20Virtus.png"
    }
  ],
  "Volvo": [
    {
      "modelName": "EC40",
      "fileName": "Volvo EC40.png",
      "imageUrl": "/cars/Volvo/Volvo%20EC40.png"
    },
    {
      "modelName": "EX30",
      "fileName": "Volvo EX30.png",
      "imageUrl": "/cars/Volvo/Volvo%20EX30.png"
    },
    {
      "modelName": "EX90",
      "fileName": "Volvo EX90.png",
      "imageUrl": "/cars/Volvo/Volvo%20EX90.png"
    },
    {
      "modelName": "XC60",
      "fileName": "Volvo XC60.png",
      "imageUrl": "/cars/Volvo/Volvo%20XC60.png"
    },
    {
      "modelName": "XC90",
      "fileName": "Volvo XC90.png",
      "imageUrl": "/cars/Volvo/Volvo%20XC90.png"
    }
  ]
};

export const ALL_LIBRARY_BRANDS = Object.keys(CARS_LIBRARY_DATA);

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Smart resolver to find the exact image for any car brand + model from the user's cars folder.
 */
export function getCarImageUrl(brand: string, model: string): string {
  if (!brand || !model) {
    return "/cars/Hyundai/Hyundai%20Creta.png";
  }

  // 1. Find matching brand key
  const brandKey = Object.keys(CARS_LIBRARY_DATA).find(
    (b) => b.toLowerCase() === brand.toLowerCase() || normalize(b) === normalize(brand)
  ) || Object.keys(CARS_LIBRARY_DATA).find(
    (b) => b.toLowerCase().includes(brand.toLowerCase()) || brand.toLowerCase().includes(b.toLowerCase())
  );

  if (!brandKey) {
    return "/cars/Hyundai/Hyundai%20Creta.png";
  }

  const items = CARS_LIBRARY_DATA[brandKey];
  const normModel = normalize(model);
  const normBrand = normalize(brandKey);

  // Common automotive aliases in India
  let targetQuery = normModel;
  if (normBrand === 'mahindra' && (normModel === 'xuv700' || normModel === '700')) {
    targetQuery = 'xuv7xo';
  } else if (normBrand === 'mahindra' && (normModel === 'xuv300' || normModel === '300')) {
    targetQuery = 'xuv3xo';
  }

  // 2. Exact match on modelName or targetQuery
  let match = items.find((item) => normalize(item.modelName) === targetQuery || normalize(item.modelName) === normModel);

  // 3. Exact match on fileName (with or without brand)
  if (!match) {
    match = items.find((item) => {
      const base = item.fileName.replace(/\.(png|jpe?g|webp)$/i, "");
      return normalize(base) === normBrand + targetQuery || normalize(base) === targetQuery ||
             normalize(base) === normBrand + normModel || normalize(base) === normModel;
    });
  }

  // 4. Starts with or ends with
  if (!match) {
    match = items.find((item) => {
      const nm = normalize(item.modelName);
      return nm.startsWith(targetQuery) || targetQuery.startsWith(nm) ||
             nm.startsWith(normModel) || normModel.startsWith(nm);
    });
  }

  // 5. Contains model
  if (!match) {
    match = items.find((item) => normalize(item.fileName).includes(targetQuery) || normalize(item.fileName).includes(normModel));
  }

  if (match) {
    return match.imageUrl;
  }

  // Fallback to first car in that brand
  if (items.length > 0) {
    return items[0].imageUrl;
  }

  return "/cars/Hyundai/Hyundai%20Creta.png";
}

/**
 * Get available models for a selected brand
 */
export function getModelsForBrand(brand: string): string[] {
  const brandKey = Object.keys(CARS_LIBRARY_DATA).find(
    (b) => b.toLowerCase() === brand.toLowerCase() || normalize(b) === normalize(brand)
  );
  if (!brandKey) return [];
  return CARS_LIBRARY_DATA[brandKey].map((c) => c.modelName);
}
