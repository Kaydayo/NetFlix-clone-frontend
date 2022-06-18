export interface IMovie {
    name: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: [number];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_code: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IRow {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;

}

export interface MovieProp {
    isLargeRow?: boolean;
    movie: IMovie;
    base_url: string;
    handleTrailer: (movie:any) => void;
}

// export interface IBanner{
//     handleStepRegister: (email:string)=>boolean;
// }

export type Error = {
    error: boolean,
    message: string,
    next: boolean
}

export interface ISignup {
    handleSignIn: () => void;
}

export type MyData = {
    email: string,
    password: string
}