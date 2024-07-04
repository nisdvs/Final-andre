export class Warranty {
    status: string = '';
    description: string = '';
    creationDate: number = 0;
    itemsWithProblem: string = '';
    createdByFK = {
        id: 0,
        email: '',
        groups: '',
        name_user: '',
    };
    approverFK: string = '';
}