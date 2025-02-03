import Image from "next/image";
import cssStyle from './hero.module.css'


export default function Hero() {
  return (
    <div className={cssStyle.background}>
        <div className={cssStyle.text}>
    <h1 className={cssStyle.h1}>We Ensure better Education for a better world</h1>
      <p className={cssStyle.p}>Education is a fundamental process of acquiring knowledge, skills, values, and attitudes. It plays a crucial role in personal and societal development
        .Education provides individuals with essential information about various subjects, enabling them to understand the world.
        It helps in developing critical thinking, problem-solving abilities, and practical skills necessary for various professions
        .Education fosters social skills, promoting cooperation and communication among individuals.</p>
    <br/>
    <br/>
      <div>
          <button className={cssStyle.btn}>Explore More <Image className={cssStyle.btnimg} src="https://cdn-icons-png.freepik.com/512/16177/16177190.png" alt="" width={100} height={100}/></button>         
        </div>
        </div>
    </div>


   
  );
}
