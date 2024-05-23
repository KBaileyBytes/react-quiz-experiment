export default function DifficultyPill({ difficulty }) {
    let styling = "text-lg text-center px-4 py-3 text-slate-200 font-bold first-letter:uppercase rounded-full "

    switch (difficulty) {
        case 'easy':
            styling += "bg-green-600";
            break;
        case 'medium':
            styling += "bg-orange-600";
            break;
        case 'hard':
            styling += "bg-red-600"
            break;
        default:
            console.log("That wasn't supposed to happen..." + difficulty);
    }

    return (
        <p className={styling}>{ difficulty }</p>
    );
}