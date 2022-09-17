export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpLength = Math.floor(Math.sqrt(breaks.length));
    let position: number = 0;

    for (; position < breaks.length; position += jumpLength) {
        if (breaks[position]) {
            break;
        }
    }

    position -= jumpLength;
    for (; position < breaks.length; position += 1) {
        if (breaks[position]) {
            return position;
        }
    }
    return -1;
}
