interface Props {
  title: string;
  imageSrc: string;
}

const Detailsblock = (props: Props) => {
  return (
    <div>
      <div className="main-container">
        <div className="inner-container">
          <div className="flex">
            <div className="card-70">
              <p className="about-color-red">About</p>
              <h3>{props.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quae asperiores doloribus ratione quis voluptatibus vero omnis
                hic recusandae veritatis quaerat aspernatur, dolorum quibusdam
                libero cumque beatae laboriosam? Ea, in.
              </p>
            </div>
            <div className="card-30">
              <img src={props.imageSrc} className="rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsblock;
