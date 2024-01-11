// will likely have to change this

export type Student = {
    id: string;
    name: string;
    email: string;
    password: string;
    teacher: string;
    placement: string
};

export type Teacher = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type Entry = {
    id: string;
    student_id: string;
    start_date: string;
    end_date: string;
    new_skill: string;
    working_to_improve: string;
    something_new: string;
    goal: string;
    effort_level: number;
    communication: number;
    attendance: number;
    initiative: number;
    status: 'draft' | 'submitted';
}

// dont know if this needs an id/if i should do this like this
// figure out how to store times
// figure out if status works
export type Day = {
    id: string;
    entry_id: string;
    day: string;
    time_in: string;
    time_out: string;
    hours: number;
    status: 'late' | 'absent' | 'on-time';
}

// figure out how/if to add tables n other stuff to add if needed