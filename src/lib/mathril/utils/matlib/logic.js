//@ts-nocheck
export class Logic {
    constructor(operation, left = null, right = null) {
        this.operation = operation; // The boolean operation (AND, OR, NOT, etc.)
        this.left = left;           // Left subtree/expression
        this.right = right;         // Right subtree/expression
    }
    static randomExpression(depth, variables = []) {
        if (depth === 0) {
            // Base case: return a leaf node with a random boolean value
            if (variables.length > 0) {
                // Randomly select a variable
                const variable = variables[Math.floor(Math.random() * variables.length)];
                return new Logic('VALUE', variable);
            } else {
                // Return a leaf node with a random boolean value
                return new Logic('VALUE', Math.random() < 0.5);
            }
        }

        // List of possible operations
        const operations = ['AND', 'OR', 'NOT', 'IMPLIES'];
        // Randomly select an operation
        const operation = operations[Math.floor(Math.random() * operations.length)];

        if (operation === 'NOT') {
            // NOT operation has only one operand
            return new Logic(operation, Logic.randomExpression(depth - 1, variables));
        } else {
            // AND and OR operations have two operands
            return new Logic(
                operation,
                Logic.randomExpression(depth - 1, variables),
                Logic.randomExpression(depth - 1, variables)
            );
        }
    }
    evaluate(variableValues = {}) {
        switch (this.operation) {
            case 'IMPLIES':
                return !this.left.evaluate() || this.right.evaluate();
            case 'AND':
                return this.left.evaluate() && this.right.evaluate();
            case 'OR':
                return this.left.evaluate() || this.right.evaluate();
            case 'NOT':
                return !this.left.evaluate();
            // Add more operations as needed
            case 'VALUE':
                return typeof this.left === 'string' ? !!variableValues[this.left] : this.left; // Assuming 'VALUE' is a terminal node with a boolean value
            default:
                throw new Error('Invalid operation');
        }
    }
    isTautology(variableValues = {}) {
        
    }
    toLatex() {
        switch (this.operation) {
            case 'IMPLIES':
                return `(${this.left.toLatex()} \\rightarrow ${this.right.toLatex()})`;
            case 'AND':
                return `(${this.left.toLatex()} \\land ${this.right.toLatex()})`;
            case 'OR':
                return `(${this.left.toLatex()} \\lor ${this.right.toLatex()})`;
            case 'NOT':
                return `\\lnot ${this.left.toLatex()}`;
            case 'VALUE':
                return typeof this.left === 'string' ? this.left : (this.left ? 'True' : 'False');
            default:
                throw new Error('Invalid operation');
        }
    }
    // Additional methods can be added here, such as toString, addLeft, addRight, etc.
}
