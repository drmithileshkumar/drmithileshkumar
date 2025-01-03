export class Crystal {
    constructor(a = 1, b = 1, c = 1, alpha = 90, beta = 90, gamma = 90) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.alpha = alpha;
        this.beta = beta;
        this.gamma = gamma;
    }
    type() {
        if(this.a == this.b && this.b == this.c) {
            if(this.alpha == this.beta && this.beta == this.gamma && this.gamma == 90) {
                return 'Cubic';
            }
            if(this.alpha == this.beta && this.beta == this.gamma && this.gamma !== 90) {
                return 'Rhombohedral';
            }
        }
        if(this.a == this.b && this.b != this.c) {
            if(this.alpha == this.beta && this.beta == this.gamma && this.gamma == 90) {
                return 'Tetragonal';
            }
            if(this.alpha == this.beta && this.beta == 90 && this.gamma == 120) {
                return 'Hexagonal';
            }
        }
        if(this.a != this.b && this.b != this.c && this.a != this.c) {
            if(this.alpha == this.beta && this.beta == this.gamma && this.gamma == 90) {
                return 'Orthorhombic';
            }
            if(this.alpha == this.gamma && this.gamma == 90 && this.beta != 90) {
                return 'Monoclinic';
            }
            if(this.alpha != this.beta && this.beta != this.gamma && this.gamma != this.alpha && this.alpha != 90 && this.beta != 90 && this.gamma != 90) {
                return 'Triclinic';
            }
        }
    }
}