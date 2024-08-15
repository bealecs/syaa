interface FAQ {
  sport: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export default function FAQ({ sport, faq }: FAQ) {
  return (
    <section>
      <h1 className="text-blue-700 font-semibold text-5xl mt-8 text-center">Frequently Asked Questions (FAQ)</h1>
      <aside className="text-center italic mb-8">
        Below are some of the most frequently asked questions in regards to
        SYAA's {sport}
      </aside>
      {faq &&
        faq.map((faq) => {
          return (
            <div key={faq.question} className="text-xl">
              <p className="mt-8"><span className="text-3xl mr-2">Q:</span>{faq.question}</p>
              <p className=""><span className="text-3xl mr-2 text-blue-700">A:</span>{faq.answer}</p>
            </div>
          );
        })}
    </section>
  );
}
