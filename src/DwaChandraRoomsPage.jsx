import { useState } from "react";
import "./DwaChandraRoomsPage.css";

const rooms = [
  {
    id: "royal",
    booked: { september: true, october: true },
    villa: "Villa I",
    name: "Royal Suite",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/e1eb03f6-12fe-44e0-a840-c8e51944b3a1/DSC09956-HDR.jpeg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/b32ce7c5-703f-4ea0-91d6-611c9db67c77/DSC00771.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/4b781794-909b-4f71-a560-dda34904706e/DSC00868.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/e6e449a1-1fab-48ce-bd1b-dafe4d35aa43/DSC01266.jpeg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3de85d3e-ecd6-4051-8680-23345a6e0cb6/DSC09945-HDR.jpeg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/8bf07296-de7f-42cd-a3e2-f51d4e9c57c3/DSC00862.jpeg?format=1500w",
    ],
    summary:
      "One of Dwa Chandra's premier suites, the Royal sits on the top floor of Villa I with wide views over the pools and surrounding jungle. Its carved antique bed, soaring ceiling and private outdoor bathing terrace give it a grand but restful character.",
    bed: "King canopy bed",
    details: [
      "Large private balcony overlooking the pools and jungle",
      "Carved antique king-size canopy bed",
      "Tall pyramid-structured ceiling",
      "Writing desk and daybed with a jungle view",
      "En suite with two wardrobes, vanity and closet",
      "Outdoor patio with bathtub",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
  },
  {
    id: "bungalow",
    booked: { september: true, october: false },
    villa: "Villa I",
    name: "Bungalow Suite",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/4376627b-cd90-4646-ae9d-a0d9e43789d3/DSC00103-HDR.jpg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c5b02df0-a991-4493-a36e-d87135ae6613/DSC00269+%282%29.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/08b934fc-9741-4e15-a1c9-e71e4e1d9367/DSC09693-HDR.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/02ab7ba8-b9c9-4d64-abb9-6e189a761071/DSC09668-HDR.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d7df3558-8d2e-4a2e-ad1c-24b319a44956/DSC01047.jpeg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/cd0b51ff-220f-4a51-90fc-fbf860c8ad5e/DSC01056.jpeg?format=1500w",
    ],
    summary:
      "Welcome to the enchanting Bungalow, our most romantic offering for those who love to be surrounded by nature.",
    bed: "King or two twins",
    details: [
      "Suspended glass bungalow at the base of Villa I",
      "King-sized bed or two twin beds",
      "Sofa seating area, convertible for a third bed",
      "Teak wood writing desk and chair",
      "Indoor bathroom sink and wardrobe dressing area",
      "Private outdoor shower and bathtub",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
  },
  {
    id: "poolview",
    booked: { september: false, october: false },
    villa: "Villa I",
    name: "Poolview Suite",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/39ac5ce4-502f-47f4-8f64-5167434a4344/DSC09849-HDR.jpg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/dbb5a84d-c6df-473a-911d-dd0ea0dec86b/DSC00764.jpeg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/845ac07c-21e4-460e-ae63-348b3863b9ce/Dwa+Chandra+Interior+%28portrait%29+_+1-4+December+2024+-+1.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3a0bdc47-6be4-466d-94e4-7428c1581931/DSC00775.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/43bc6627-5b6f-4e3b-ab49-947c4154a94b/ENG00795.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/237dcd4e-feed-454f-af68-0e5e76c3650e/Dwa+Chandra+Interior+%28landscape%29+_+1-4+December+2024+-+27.jpg?format=1500w",
    ],
    summary:
      "Overlooking both Villa I pools, Poolview offers an elevated perspective from its private furnished balcony. The high pyramid ceiling keeps the room open and airy, while a window cove provides a quiet place to relax or an optional third bed.",
    bed: "King or two twins",
    details: [
      "Private furnished balcony overlooking the Villa I pools",
      "Tall pyramid-structured ceiling",
      "King-sized bed or two twin beds",
      "Window cove, convertible for a third bed",
      "Writing desk with a pool view",
      "Indoor bathroom with bathtub and shower",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
  },
  {
    id: "skylight",
    booked: { september: false, october: false },
    villa: "Villa I",
    name: "Skylight Suite",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/8f8931be-c96b-4535-9d59-c88896f4542c/DSC00802.jpg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/79a85da3-74b9-462e-98a1-89470b23a0e5/DSC09993-HDR.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/db686cd0-26f5-412a-8438-741b7ca94ff0/DSC00012-HDR.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/f0501441-a4f1-4e90-a438-bb85490de03f/ENG00115.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/7acadc2f-4ee8-48a4-a2d9-7b4e0c5d609c/Dwa+Chandra+Interior+%28landscape%29+_+1-4+December+2024+-+31.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/764cffe5-f219-4b52-b47b-ecf97a8af86d/DSC09981-HDR.jpg?format=1500w",
    ],
    summary:
      "Located beside the Royal Suite on the top floor of Villa I, Skylight is bright, calm and adaptable. Natural light falls through the open-air en suite onto the bathtub and shower, creating one of the villa's most distinctive bathing spaces.",
    bed: "King or two twins",
    details: [
      "King-sized bed or two twin beds",
      "Tall pyramid-structured ceiling",
      "Long couch, convertible for an optional third bed",
      "Open-air en suite with skylights over the bathtub and shower",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
  },
  {
    id: "river",
    booked: { september: false, october: false },
    villa: "Villa I",
    name: "River Suite",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/a9058eed-95b3-4a9b-940c-ae75595efeed/DSC00062-HDR.jpg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/8617556c-bb89-438f-a330-6b781f2c0d93/DSC01128.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/e075811f-67a2-4d8e-9b23-f2569a74d570/DSC01138.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/2c6a557d-3ac6-477f-8a21-c1491bf184ea/DSC00079.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/163d78d0-89e2-44f2-ba86-1d3ec695a718/DSC00226-HDR.jpg?format=1500w",
    ],
    summary:
      "Tucked at the base of the property, River is Dwa Chandra's most secluded suite. The sound of flowing water and the night jungle surrounds its private patio, while two double beds make it especially comfortable for friends sharing.",
    bed: "Two double beds",
    details: [
      "Two double beds with mosquito netting",
      "Built-in teak wardrobes with carved wood lighting",
      "Indoor en suite with vanity and shower",
      "Large private patio with an outdoor stone tub",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
  },
  {
    id: "family-one",
    booked: { september: false, october: false },
    villa: "Villa I",
    name: "Family Room",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/e8a8a9c9-6d1f-464d-8932-7352aacbe4e2/dwa+chandra+villa+1.jpg?format=1500w",
    gallery: [],
    summary:
      "Usually a relaxed family lounge for movie nights and gathering, this flexible Villa I space can be converted into a simple twin bedroom when extra capacity is needed. Bathroom access is through the adjoining villa kitchen.",
    bed: "Two converted twin beds",
    details: [
      "Two converted twin beds, slightly wider and shorter",
      "Bathroom with shower accessed through the Villa I kitchen",
      "Temporary closet and suitcase holders",
      "Air conditioning and dehumidifier",
    ],
    conversion: true,
  },
  {
    id: "grand-jungle",
    booked: { september: false, october: true },
    villa: "Villa II",
    name: "Grand Jungle Suite",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/1710daca-49aa-4a8b-8497-06f37c356c76/DSC09138-HDR.jpg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c411a9d6-9d9d-4ed3-9b05-4be3c84f6edb/DSC09298.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d2cc2b12-652b-42c5-b066-fe13b949a245/DSC00462+%281%29.jpeg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/440e77b6-8d2c-4554-aa30-fb3f55bb41b2/DSC00448.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/b9f660af-a5b4-4a61-8f16-a54f4bb7fcff/DSC00791.jpeg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/8860b37f-3e19-4fc5-9913-5de216662549/DSC09096-HDR.jpg?format=1500w",
    ],
    summary:
      "Grand Jungle is one of Dwa Chandra's premier rooms and its most spacious private suite. Set on the main floor of Villa II, it opens directly to the pool deck and frames uninterrupted jungle views from the bed and dressing room.",
    bed: "Super king bed",
    details: [
      "Super king bed with jungle views",
      "Antique oriental carpet and long teak writing desk",
      "Indoor bathroom with glowing onyx vanity and shower",
      "Private patio with circular bathtub and recliner lounge",
      "Glass-walled dressing room overlooking the patio",
      "Direct access from the pool deck to the Villa II pool",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
  },
  {
    id: "mural",
    booked: { september: false, october: false },
    villa: "Villa II",
    name: "Mural Suite",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/43ee03a5-d0b4-49cb-823b-d7d51e6fa24a/DSC09347-HDR.jpg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/ac644322-6132-472e-a5bf-dedece8c8a46/dwa+chandra+villa+2.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/ee3bc8f8-5454-4bae-b0cb-5a10e9589d06/DSC00412+%281%29.jpeg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/0ce3d4ac-7134-42de-b1c5-62be3b3e24de/DSC09566.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/77e041cc-8ab0-4fa5-8429-5bfc0bf6886a/DSC09536.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/16027d6b-5cbb-4c21-802e-2fc87a38dc80/DSC09411-HDR.jpg?format=1500w",
    ],
    summary:
      "Mural is a large, cooling suite on the main floor of Villa II, designed for two guests to share without feeling crowded. Its glowing floor-to-ceiling onyx bathroom and private outdoor bath bring warmth and drama to the calm interior.",
    bed: "Two double beds",
    details: [
      "Two double beds with mosquito netting",
      "Antique oriental carpet",
      "Long teak writing desk with two chairs",
      "Indoor bathroom with glowing onyx vanity and shower",
      "Outdoor bathtub on a private patio",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
  },
  {
    id: "gardenview",
    booked: { september: false, october: false },
    villa: "Villa II",
    name: "Gardenview Suite",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/7061ccb7-f674-406c-b8a0-65d591ede44b/DSC00373-HDR.jpg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3544f64b-8b4b-472b-9e14-7b43e408e51f/DSC09233-HDR.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/f41e2969-22e3-4218-a6e4-983ced1ec2c5/DSC00439+%282%29.jpeg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/9f8761c8-e4b6-4f4b-9a30-4df92da0d70a/DSC09275.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/44da806c-3b11-4e97-9801-4e1ecaed0778/DSC09281.jpg?format=1500w",
    ],
    summary:
      "Gardenview is the most compact suite, tucked privately on the main floor of Villa II. The king bed looks toward the pool and garden, while an outdoor bathtub beneath the trees offers a peaceful place to unwind.",
    bed: "King bed",
    details: [
      "King-sized bed with pool and garden views",
      "Long teak writing desk",
      "Built-in wardrobe",
      "En suite with glowing onyx vanity and shower",
      "Outdoor bathtub beneath the trees",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
  },
  {
    id: "fishbowl",
    booked: { september: true, october: true },
    villa: "Villa II",
    name: "Fishbowl Suite & Family Room",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/10f11232-5c96-481f-a041-1ecc6e3cf793/DSC00827-HDR.jpg?format=1500w",
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/e4f889ae-5a55-4e11-bbaf-127a31671dfd/dwa+chandra+villa+2.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/1c64395f-a4d9-4f90-b2fc-8da236f39d88/DSC09461-HDR.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/9c6566ba-fb29-480a-a134-bcb62ab3e5b8/DSC00817-HDR.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d945f8f3-5b4d-4c23-ac44-10212e8037b4/DSC00534+%282%29.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/b70cbfca-aa3c-4c0b-857c-e2167b3893ed/DSC00512.jpeg?format=1500w",
    ],
    summary:
      "Curved glass walls immerse this lower-floor Villa II suite in views of the caves, jungle and river gorge. A separate family room and shared Jack-and-Jill bathroom make it a versatile option for close friends or a small family group.",
    bed: "King bed + convertible couch",
    details: [
      "King-sized bed overlooking the river gorge",
      "Spacious curved deck with seating and jungle views",
      "Glowing onyx open-air Jack-and-Jill bathroom",
      "Outdoor circular soaking tub",
      "Separate family room with a couch convertible to a bed",
      "Air conditioning, dehumidifier and Sonos speakers",
    ],
    conversion: true,
  },
];

const retreatDates = [
  {
    id: "september",
    label: "23rd–29th Sept",
    message: "23rd–29th September 2026",
  },
  {
    id: "october",
    label: "3rd–12th October",
    message: "3rd–12th October 2026",
  },
];

function RoomGallery({ room, eager }) {
  const images = [room.image, ...room.gallery];
  const [activeImage, setActiveImage] = useState(0);

  const showImage = (offset) => {
    setActiveImage(
      (current) => (current + offset + images.length) % images.length,
    );
  };

  return (
    <div className="dwa-room__image">
      <img
        src={images[activeImage]}
        alt={`${room.name} at Dwa Chandra, view ${activeImage + 1} of ${images.length}`}
        loading={eager ? "eager" : "lazy"}
      />
      <span>{room.villa}</span>
      {room.conversion ? <small>Flexible room</small> : null}
      {images.length > 1 ? (
        <div className="dwa-room__gallery-controls">
          <button
            type="button"
            onClick={() => showImage(-1)}
            aria-label={`Previous ${room.name} image`}
            title="Previous image"
          >
            ←
          </button>
          <b>
            {activeImage + 1} / {images.length}
          </b>
          <button
            type="button"
            onClick={() => showImage(1)}
            aria-label={`Next ${room.name} image`}
            title="Next image"
          >
            →
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default function DwaChandraRoomsPage() {
  const [selectedDateId, setSelectedDateId] = useState(retreatDates[0].id);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const selectedDate = retreatDates.find((date) => date.id === selectedDateId);
  const availableRooms = rooms.filter((room) => !room.booked[selectedDateId]);
  const selected = availableRooms.find((room) => room.id === selectedRoom);
  const handleDateChange = (dateId) => {
    setSelectedDateId(dateId);
    setSelectedRoom(null);
  };
  const message = selected
    ? `Hi Tereza, I would like to request the ${selected.name} in ${selected.villa} for the Bali retreat from ${selectedDate.message}. Could you confirm availability?`
    : `Hi Tereza, I would like help choosing a room for the Bali retreat from ${selectedDate.message}.`;
  const whatsappUrl = `https://wa.me/201010001133?text=${encodeURIComponent(message)}`;

  return (
    <main className="dwa-rooms-page">
      <header className="dwa-rooms-page__nav">
        <a className="dwa-rooms-page__brand" href="/bali-september-7-days">
          The Reset · Bali
        </a>
        <a
          className="dwa-rooms-page__help"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Need help choosing?
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="dwa-rooms-page__intro">
        <p className="dwa-rooms-page__eyebrow">Dwa Chandra · Ubud</p>
        <h1>Choose your room</h1>
        <p className="dwa-rooms-page__lede">
          Nine unique suites sit across two villas, each with its own view,
          character and bathing space. Explore the rooms, then select the one
          that feels like yours.
        </p>
        <div className="dwa-rooms-page__facts" aria-label="Venue details">
          <span>9 luxury suites</span>
          <span>2 convertible family rooms</span>
          <span>En suite bathrooms</span>
          <span>Private bathtubs</span>
        </div>
      </section>

      <section
        className="dwa-rooms-page__selector"
        aria-labelledby="rooms-heading"
      >
        <div className="dwa-rooms-page__selector-head">
          <div>
            <p className="dwa-rooms-page__eyebrow">Your space</p>
            <h2 id="rooms-heading">Explore the suites</h2>
          </div>
          <div
            className="dwa-rooms-page__filters"
            aria-label="Choose retreat dates"
          >
            {retreatDates.map((date) => (
              <button
                className={selectedDateId === date.id ? "is-active" : ""}
                key={date.id}
                onClick={() => handleDateChange(date.id)}
                type="button"
              >
                {date.label}
              </button>
            ))}
          </div>
        </div>

        <div className="dwa-rooms-page__grid">
          {availableRooms.map((room, index) => {
            const isSelected = selectedRoom === room.id;
            return (
              <article
                className={`dwa-room${isSelected ? " is-selected" : ""}`}
                key={room.id}
              >
                <RoomGallery room={room} eager={index < 2} />
                <div className="dwa-room__body">
                  <div className="dwa-room__heading">
                    <h3>{room.name}</h3>
                    <span>{room.bed}</span>
                  </div>
                  <p>{room.summary}</p>
                  <ul>
                    {room.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedRoom(isSelected ? null : room.id)}
                  >
                    <span>{isSelected ? "Selected" : "Select this room"}</span>
                    <span aria-hidden="true">{isSelected ? "✓" : "→"}</span>
                  </button>
                </div>
              </article>
            );
          })}
          {availableRooms.length === 0 ? (
            <p className="dwa-rooms-page__empty">
              All rooms are currently booked for these retreat dates.
            </p>
          ) : null}
        </div>
      </section>

      <section className="dwa-rooms-page__note">
        <p className="dwa-rooms-page__eyebrow">A note on room requests</p>
        <p>
          Rooms are allocated in the order bookings are received. Your choice is
          a request until availability is confirmed by the retreat team.
        </p>
      </section>

      <div
        className={`dwa-rooms-page__selection${selected ? " is-visible" : ""}`}
        aria-live="polite"
      >
        {selected ? (
          <>
            <div>
              <span>Your room request</span>
              <strong>{selected.name}</strong>
              <small>{selectedDate.label}</small>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Request this room <span aria-hidden="true">↗</span>
            </a>
          </>
        ) : null}
      </div>
    </main>
  );
}
