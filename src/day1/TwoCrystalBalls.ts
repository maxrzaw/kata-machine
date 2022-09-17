export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpLength = Math.floor(Math.sqrt(breaks.length));
    let position: number = 0;
    let found = false;

    // First Crystal ball
    for (; position < breaks.length; position += jumpLength) {
        if (breaks[position]) {
            break;
        }
    }

    // Use the second ball to find the exact floor.
    position -= jumpLength;
    for (; position < breaks.length; position += 1) {
        if (breaks[position]) {
            found = true;
            break;
        }
    }
    return found ? position : -1;
}
