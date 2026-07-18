import ButtonTheme from "../ui/Button";

export default function ResumeButton() {
  return (
    <div className="hidden lg:block">
      <ButtonTheme href="/resume.pdf">
        Resume
      </ButtonTheme>
    </div>
  );
}