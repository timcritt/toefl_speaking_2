import ListenPresentation from "./ListenPresentation";
import maleProfessor from "@/assets/male_professor.png";
import femaleProfessor from "@/assets/female_professor.png";

const ListenLectureContainer = ({ audio, voiceGender }) => {
	const image = voiceGender === "MALE" ? maleProfessor : femaleProfessor;

	return (
		<article>
			<ListenPresentation audio={audio} image={image} />
		</article>
	);
};
export default ListenLectureContainer;
