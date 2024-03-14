export default function Styleguide() {
  return (
    <div className="styleguide">
      <h1>Styleguide</h1>
      <h2>Typography</h2>
      <div className="styleguide-item">
        <h3>H1</h3>
        <h1>Hallo</h1>
      </div>
      <div className="styleguide-item">
        <h3>H2</h3>
        <h2>Hallo</h2>
      </div>
      <div className="styleguide-item">
        <h3>H3</h3>
        <h3>Hallo</h3>
      </div>
      <div className="styleguide-item">
        <h3>H4</h3>
        <h4>Hallo</h4>
      </div>
      <div className="styleguide-item">
        <h3>H5</h3>
        <h5>Hallo</h5>
      </div>
      <div className="styleguide-item">
        <h3>H6</h3>
        <h6>Hallo</h6>
      </div>
      <div className="styleguide-item">
        <h3>Paragraph</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse
          perspiciatis illum beatae, est qui sunt minima blanditiis labore ut
          fugiat iure maiores quod accusantium. Quod molestias asperiores ipsum
          ipsa.
        </p>
      </div>
      <div className="styleguide-item">
        <h3>Small</h3>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          necessitatibus delectus, repellat id tempore reprehenderit facilis
          facere ad maxime harum officia optio adipisci minus consectetur
          incidunt quam similique omnis beatae!
        </small>
      </div>
    <h2>Buttons</h2>
      <div className="styleguide-item">
        <h3>Regular buttons</h3>
        <div style={{ display: "flex", gap: 10 }}>
          <button>Click me</button>
          <button className="primary">Click me</button>
          <button className="secondary">Click me</button>
        </div>
        <h3>Small buttons</h3>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="small">Click me</button>
          <button className="primary small">Click me</button>
          <button className="secondary small">Click me</button>
        </div>
      </div>
      <h2>Skeleton</h2>
      <div className="styleguide-item">
        <h3>Regular</h3>
        <div className="skeleton" style={{ width: 300, height: 150 }}></div>
        <h3>Text</h3>
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <div
            className="skeleton"
            style={{ width: "auto", height: "100%", aspectRatio: 1 }}
          ></div>
          <div style={{ display: "grid", gap: 5 }}>
            <div
              className="skeleton"
              style={{ width: 300, height: 32, marginBottom: 10 }}
            ></div>
            <div className="skeleton" style={{ width: 160, height: 16 }}></div>
            <div className="skeleton" style={{ width: 600, height: 16 }}></div>
            <div className="skeleton" style={{ width: 120, height: 16 }}></div>
          </div>
        </div>
      </div>
      <h2>Inputs</h2>
      <div className="styleguide-item">
        <h3>Text input</h3>
        <input type="text" />
      </div>
      <div className="styleguide-item">
        <h3>Textarea</h3>
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </div>

      <div className="styleguide-item">
        <h3>Radio input</h3>
        <div>
          <input type="radio" name="field" id="1" />
          <label htmlFor="1">One</label>
        </div>
        <div>
          <input type="radio" name="field" id="2" />
          <label htmlFor="2">Two</label>
        </div>
        <div>
          <input type="radio" name="field" id="3" />
          <label htmlFor="3">Three</label>
        </div>
      </div>
      <div className="styleguide-item">
        <h3>Checkbox input</h3>
        <div>
          <input type="checkbox" name="field" id="21" />
          <label htmlFor="21">One</label>
        </div>
        <div>
          <input type="checkbox" name="field" id="22" />
          <label htmlFor="22">Two</label>
        </div>
        <div>
          <input type="checkbox" name="field" id="23" />
          <label htmlFor="23">Three</label>
        </div>
      </div>
      <div className="styleguide-item">
        <h3>Select</h3>
        <select name="select" id="Selectbox">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
        </select>
      </div>
    </div>
  );
}
