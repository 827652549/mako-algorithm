declare interface Math {
    /**
     * Returns the sum of all values in an iterable with better precision
     * than standard floating-point addition.
     */
    sumPrecise(values: Iterable<number>): number;
}
