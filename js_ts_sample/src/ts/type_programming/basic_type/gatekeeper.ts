declare function secondsSinceLastComment(userId: string): number;
declare function postComment(comment: string, userId: string): void;

const commentGatekeeper = (comment: string, userId: string): boolean => {
    if ((comment == "") || (secondsSinceLastComment(userId) < 10))
        return false;

    postComment(comment, userId);

    return true;
}

console.log(commentGatekeeper('so good', '12'));