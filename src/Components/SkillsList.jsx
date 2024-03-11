import "nes.css/css/nes.min.css";
import "./CSS/SkillsList.css";

const SkillsList = ({ no, text, setSkills, progressBar }) => {
  const increaseProgress = (no) => {
    let data = JSON.parse(localStorage.getItem("skills"));
    data = data.map((skill) => {
      if (skill.no === no) {
        return { ...skill, progressBar: skill.progressBar + 4 };
      } else {
        return skill;
      }
    });

    setSkills(data);
  };

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("skills"));

    data = data.filter((skill) => skill.no !== no);

    console.log(no);
    setSkills(data);
  };

  return (
    <div className="skill-container">
      <button
        onClick={() => {
          deleteTodo(no);
        }}
        type="button"
        class="nes-btn is-error delete-btn"
      >
        Delete
      </button>
      <span className="nes-text is-warning">{text}</span>
      <progress
        className="nes-progress is-primary progress-bar"
        value={progressBar}
        max="100"
      ></progress>
      <button
        onClick={() => {
          increaseProgress(no);
        }}
        type="button"
        className="nes-btn is-primary progress-btn"
      >
        +
      </button>
    </div>
  );
};

export default SkillsList;
