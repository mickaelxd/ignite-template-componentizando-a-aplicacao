import {Button} from "./Button";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface SideBarProps {
    handleClickButton: Function,
    selectedGenreId: number,
    genres: Array<GenreResponseProps>
}

const SideBar = ({genres, handleClickButton, selectedGenreId}: SideBarProps) => {
    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {genres.map(genre => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>

        </nav>
    )
}

export default SideBar;
