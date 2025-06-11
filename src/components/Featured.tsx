


export default function Featured() {



  return (
    <div className="bg-slate-800/80 h-screen w-full sm:w-1/2 md:w-1/3 lg:w-1/6  s  pt-10  rounded-tl-2xl shadow-lg shadow-black flex-col flex gap-3 p-1 ">
      <h1 className="text-white text-xl font-semibold text-center">
        Welcome back!
      </h1>
      <h4 className="text-md  text-center">
        Try out our new Afternoon Tea Section!{" "}
      </h4>
      <hr className="m-1" />
      <p className="text-sm text-center text-white">
        Step into our new "Afternoon Tea" section to boost your note-taking.
        Discover insights and practical tips for clearer information capture and
        easier organization. Explore our collection and find your best
        note-taking methods.
      </p>
      <img
        src="https://www.sembly.ai/wp-content/uploads/2024/07/close-up-still-life-hard-exams-1-1024x683.jpg"
        alt="noteTaking img"
        className="rounded-2xl shadow-md shadow-black"
      />
      <p className="text-sm text-center text-white">
        Notes are crucial for learning, turning fleeting thoughts into lasting
        records. By actively processing and summarizing information, we
        understand and remember it better. Writing notes forces focus, helps
        identify key ideas, and builds connections.{" "}
        <a
          href="https://en.wikipedia.org/wiki/Seneca_the_Younger"
          className="underline font-bold"
        >
          Seneca
        </a>{" "}
        said, "Longum iter est per praecepta, breve et efficax per exempla."
        While examples help, notes provide the structure to truly learn.
      </p>
      <p className="text-sm text-center text-white">
        Notes are also vital for reflection and future use. They become personal
        knowledge banks for review and application, saving time and aiding
        recall. Organized notes show our learning journey.{" "}
        <a
          href="https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson"
          className="underline font-bold"
        >
          Emerson
        </a>{" "}
        noted, "Speech is power... to persuade, to convert, to compel." While
        speech moves, notes offer lasting intellectual power to revisit and use
        what we've learned.
      </p>
    </div>
  );
}
