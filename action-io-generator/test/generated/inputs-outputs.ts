// This file was auto-generated by action-io-generator. Do not edit by hand!
export enum Inputs {
    /**
     * This is the bar input.
     * Required: false
     * Default: None.
     */
    BAR = "bar",
    /**
     * This is a multiline but folded string. Its line break will be removed when the string is read from this file.
     * Required: false
     * Default: None.
     */
    FOLDED = "folded",
    /**
     * This is the foo input.
     * Required: true
     * Default: "foo-default"
     */
    FOO = "foo",
    /**
     * Kebabs are delicious, but personally I prefer snakes.
     * Required: false
     * Default: "Lamb"
     */
    KEBAB_INPUT = "kebab-input",
    /**
     * Here's an input with a long description.
     * It's even got multiple lines. I hope this doesn't mess up
     * the generator too badly.
     * Required: false
     * Default: None.
     */
    MULTILINE = "multiline",
    /**
     * Snakes are less delicious, but easier to read.
     * Required: false
     * Default: "Anaconda"
     */
    SNAKE_INPUT = "snake_input",
}

export enum Outputs {
    /**
     * The result output.
     * Required: false
     * Default: None.
     */
    RESULT = "result",
}