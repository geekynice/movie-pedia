import Search from ".";

export default function Home() {
  return (
    <section>
      <h1 className="py-5 text-center">Movie Pedia</h1>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7">
          <Search/>
        </div>
      </div>
    </section>

  );
}
