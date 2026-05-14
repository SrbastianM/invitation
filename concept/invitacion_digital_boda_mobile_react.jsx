export default function InvitacionDigital() {
  const audioRef = React.useRef(null);
  const targetDate = new Date('2027-05-16T00:00:00');

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-x-hidden font-sans scroll-smooth">
      {/* AUDIO ROMÁNTICO */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/18090000000"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl uppercase tracking-[2px] text-xs font-bold"
      >
        WhatsApp
      </a>
      {/* ESCENA 1 */}
      <section className="relative h-screen w-full snap-start overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6 animate-pulse">
          <h1 className="text-5xl font-light tracking-[8px] uppercase mb-4">
            Jonathan & Emily
          </h1>
          <p className="text-lg tracking-[4px] uppercase">
            Scroll Down
          </p>
        </div>
      </section>

      {/* ESCENA 2 */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 text-center px-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-[6px] uppercase mb-4">
            Our Forever Begins
          </h2>

          <p className="text-xl tracking-[3px]">05 / 16 / 2027</p>
        </div>
      </section>

      {/* ESCENA 3 CONTADOR */}
      <section className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-6 py-20 text-center">
        <p className="uppercase tracking-[5px] text-sm text-gray-400 mb-5">
          Countdown
        </p>

        <h2 className="text-4xl font-light tracking-[5px] mb-14">
          Counting The Moments
        </h2>

        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
            <h3 className="text-5xl font-bold">{timeLeft.days}</h3>
            <p className="mt-3 uppercase tracking-[4px] text-sm">Days</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
            <h3 className="text-5xl font-bold">{timeLeft.hours}</h3>
            <p className="mt-3 uppercase tracking-[4px] text-sm">Hours</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
            <h3 className="text-5xl font-bold">{timeLeft.minutes}</h3>
            <p className="mt-3 uppercase tracking-[4px] text-sm">Minutes</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
            <h3 className="text-5xl font-bold">{timeLeft.seconds}</h3>
            <p className="mt-3 uppercase tracking-[4px] text-sm">Seconds</p>
          </div>
        </div>
      </section>

      {/* ESCENA 4 MAPA */}
      <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20 text-center">
        <p className="uppercase tracking-[5px] text-sm text-gray-400 mb-5">
          Location
        </p>

        <h2 className="text-4xl font-light mb-6 tracking-[5px]">
          Wedding Location
        </h2>

        <p className="text-lg text-gray-300 mb-10">
          La Romana, Dominican Republic
        </p>

        <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=Casa%20de%20Campo%20La%20Romana%20Dominican%20Republic&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href="https://maps.google.com/?q=Casa+de+Campo+La+Romana+Dominican+Republic"
          target="_blank"
          className="mt-8 bg-white text-black px-8 py-4 rounded-full uppercase tracking-[3px] text-sm font-semibold"
        >
          Open Map
        </a>
      </section>

      {/* ESCENA 5 RSVP */}
      <section className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-[35px] p-8 border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[5px] text-sm text-gray-400 mb-4">
              RSVP
            </p>

            <h2 className="text-4xl font-light tracking-[4px]">
              RSVP Confirmation
            </h2>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target[0].value;
              const phone = e.target[1].value;
              const email = e.target[2].value;
              const attendance = e.target[3].value;
              const message = e.target[4].value;

              const text = `Wedding RSVP%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AAttendance: ${attendance}%0AMessage: ${message}`;

              window.open(`https://wa.me/18090000000?text=${text}`, '_blank');
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white outline-none"
            />

            <select className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white outline-none">
              <option className="text-black">Will you attend?</option>
              <option className="text-black">Yes, I will attend</option>
              <option className="text-black">Sorry, I can’t attend</option>
            </select>

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-black rounded-2xl p-4 uppercase tracking-[3px] font-semibold hover:scale-[1.02] transition"
            >
              Send Confirmation
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER FINAL */}
      <footer className="bg-black py-10 text-center border-t border-white/10">
        <h3 className="text-2xl tracking-[6px] uppercase mb-3 font-light">
          Jonathan & Emily
        </h3>

        <p className="text-gray-400 text-sm tracking-[3px]">
          05 • 16 • 2027
        </p>
      </footer>
    </div>
  );
}
