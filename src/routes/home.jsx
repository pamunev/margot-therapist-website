import margot from "../Assets/images/margot-dog.png";

export default function Home() {
  return (
    <div className="section-home">
      <div id="margot-pic-area">
        <img src={margot} alt="Margot the Therapist" className="margot-pic" />
      </div>
      <div className="home-content-text">
        <p>
          <strong>I think this section should be shorter.</strong> Just a
          snippet, maybe a headline that summarizes her services. Before the
          more in-depth stuff. With maybe a link to the about me section.{" "}
          <strong>
            CLIENT WILL SEND ME THE CONTENT THEY WANT FOR THIS SECTION.
          </strong>
          But here's the original text from Margot's other pages:
        </p>
        <p>
          Do you feel alone, confused, or like no one understands you? Do you
          feel like your life is out of balance? Perhaps you are experiencing
          mood swings? Are disturbing memories from the past or worries about
          your future impacting your present? You deserve to live in a state of
          being where you feel seen, heard, supported, and understood. By
          talking out your problems, learning new coping tools, and developing a
          deeper awareness of your needs, you will be more equipped to manage
          difficult days. In time, you will experience a deeper connection with
          yourself and with others.The benefits of therapy are life changing.I
          can help get you there.
        </p>
        <p>
          I specialize in treating individuals with depression, anxiety, trauma,
          codependency, & healing from contentious relationships. I practice
          within an attachment theory framework exploring how your past primary
          relationships impact your current ones. I will teach you mindfulness
          coping skills that will guide you to be in the present moment without
          judgement.
        </p>
        <p>
          I am here to act as a guide as you begin your journey of
          transformation, healing, recovery and self-discovery, and exploration.
          I recognize the vulnerability it takes and how challenging it is to
          share one’s feelings.I will hold a comforting space for you with
          sensitivity, dignity & respect. Your feelings and experiences are
          valid. It's okay to not be okay.
        </p>
        <p>
          <strong>
            Maybe add About me and Make an appointment buttons here.
          </strong>
        </p>
      </div>
    </div>
  );
}
