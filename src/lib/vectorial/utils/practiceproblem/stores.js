import { derived, writable } from 'svelte/store';

export let problems = writable([]);
export let allproblems = writable([]);

export const options = writable([
    "A", "B", "C", "D"
]);


export const subjects = writable([
    'Physics',
    'Chemistry',
    'Mathematics'
]);
export const chapters = writable({
    'Physics': [
        'Units and Measurement','Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion', 'Work, Energy and Power', 'System of Particles', 'Rotational Motion', 'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves', 'Electric Charges and Fields', 'Electrostatic Potential and Capacitance', 'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves', 'Ray Optics and Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei', 'Semiconductor Electronics'
    ],
    'Chemistry': [
        'Some basic concepts of chemistry','Structure of atom', 'Classification of elements and periodicity of properties', 'Chemical bonding and molecular structure', 'States of matter', 'Thermodynamics', 'Equilibrium', 'Redox reactions', 'Hydrogen', 'The s-Block elements', 'The p-Block elements', 'Organic Chemistry', 'Hydrocarbons', 'Environmental chemistry', 'The solid state', 'Solutions', 'Electrochemistry', 'Chemical kinetics', 'Surface chemistry', 'Isolation of elements', 'More of p-Block elements', 'The d- and f-Block elements', 'Coordination compounds', 'Haloalkanes and haloarenes', 'Alcohols, phenols and ethers', 'Aldehydes, ketones and carboxylic acids', 'Amines', 'Biomolecules', 'Polymers', 'Chemistry in everyday life'
    ],
    'Mathematics': [
        'Sets', 'Relations and functions 11', 'Trigonometric functions', 'Principle of mathematical induction', 'Complex numbers and quadratic equations', 'Linear inequalities', 'Permutations and combinations', 'Binomial theorem', 'Sequences and series', 'Straight lines', 'Conic sections', 'Indroduction to 3D geometry', 'Limits and derivatives', 'Mathematical reasoning', 'Statistics', 'Probability', 'Relations and functions 12', 'Inverse trigonometric functions', 'Matrices', 'Determinants', 'Continuity and differentiability', 'Application of derivatives', 'Integrals', 'Application of integrals', 'Differential equations', 'Vector algebra', 'Three dimensional geometry', 'Linear programming'
    ]
});
export const topics = writable({
    'Physics': {
        'Units and Measurement': [
            'The international system of units',
            'Measurement of length',
            'Measurement of mass',
            'Measurement of time',
            'Accuracy, precision of instruments and errors in measurement',
            'Significant figures',
            'Dimensions of physical quantities',
            'Dimensional formulae and dimensional equations',
            'Dimensional analysis and its applications'
                ],
        'Motion in a Straight Line': [
            'Position, path length and displacement',
            'Average velocity and average speed',
            'Instantaneous velocity and speed',
            'Acceleration',
            'Kinematic equations for uniformly accelerated motion',
            'Relative velocity'
                ],
        'Motion in a Plane': [
            'Scalars and Vectors',
            'Multiplication of vectors by real numbers',
            'Addition and subtraction of vectors -- graphical method',
            'Resolution of vectors',
            'Vector addition -- analytical method',
            'Motion in a plane',
            'Motion in a plane with constant acceleration',
            'Relative velocity in two dimensions',
            'Projectile motion',
            'Uniform circular motion'
                ],
        'Laws of Motion': [
            'The law of inertia',
            "Newton's first law of motion",
            "Newton's second law of motion",
            "Newton's third law of motion",
            'Conservation of momentum',
            'Equilibrium of a particle',
            'Common forces in mechanics',
            'Circular motion',
            'Solving problems in mechanics'
                ],
        'Work, Energy and Power': [
            'The work-energy theorem',
            'Work',
            'Kinetic Energy',
            'Work done by a variable force',
            'The work-energy theorem for a variable force',
            'The concept of potential energy',
            'The conservation of mechanical energy',
            'The potential energy of a spring',
            'The law of conservation of energy',
            'Power',
            'Collisions'
                ],
        'System of Particles': [
            'Center of mass',
            'Motion of center of mass',
            'Linear momentum of a system of particles'
                ],
        'Rotational Motion': [
            'Vector product of two vectors',
            'Angular velocity and its relation with linear velocity',
            'Torque and angular momentum',
            'Equilibrium of a rigid body',
            'Moment of inertia',
            'Theorems of perpendicular and parallel axes',
            'Kinetics of rotational motion about a fixed axis',
            'Dynamics of rotational motion about a fixed axis',
            'Angular momentum in case of rotations about a fixed axis',
            'Rolling motion'
                ],
        'Gravitation': [
            "Kepler's laws",
            'Universal law of gravitation',
            'The gravitational constant',
            'Acceleration due to gravity of the earth',
            'Acceleration due to gravity below and above the surface of earth',
            'Gravitational potential energy',
            'Escape speed',
            'Earth satellite',
            'Energy of an orbiting satellite',
            'Geostationary and polar satellites',
            'Weightlessness'
                ],
        'Mechanical Properties of Solids': [
            'Elastic behaviour of solids',
            'Stress and strain',
            "Hooke's law",
            'Stress-strain curve',
            'Elastic moduli',
            'Applications of elastic behaviour of materials'
                ],
        'Mechanical Properties of Fluids': [
            'Pressure',
            'Streamline flow',
            "Bernoulli's principle",
            'Viscosity',
            'Surface tension'
                ],
        'Thermal Properties of Matter': [
            'Temperature and heat',
            'Measurement of temperature',
            'Ideal-gas equation and absolute temperature',
            'Thermal expansion',
            'Specific heat capacity',
            'Calorimetry',
            'Change of state',
            'Heat transfer',
            "Newton's law of cooling"
                ],
        'Thermodynamics': [
            'Thermal equilibrium',
            'Zeroth law of thermodynamics',
            'Heat, internal energy and work',
            'First law of thermodynamics',
            'Specify heat capacity',
            'Thermodynamic state variables and equation of state',
            'Thermodynamic processes',
            'Heat engines',
            'Refrigerators and heat pumps',
            'Second law of thermodynamics',
            'Reversible and irreversible processes',
            'Carnot engine'
                ],
        'Kinetic Theory': [
            'Molecular nature of matter',
            'Behaviour of gases',
            'Kinetic theory of an ideal gas',
            'Law of equipartition of energy',
            'Specific heat capacity',
            'Mean free path'
                ],
        'Oscillations': [
            'Periodic and oscillatory motions',
            'Simple harmonic motion',
            'Simple harmonic motion and uniform circular motion',
            'Velocity and acceleration in simple harmonic motion',
            'Force law for simple harmonic motion',
            'Energy in simple harmonic motion',
            'Some systems executing Simple Harmonic Motion',
            'Damped simple harmonic motion',
            'Forced oscillations and resonance'
                ],
        'Waves': [
            'Transverse and longitudinal waves',
            'Displacement relation in a progressive wave',
            'The speed of a travelling wave',
            'The principle of superposition of waves',
            'Reflection of waves',
            'Beats',
            'Doppler effect'
                ],
        'Electric Charges and Fields': [
            'Electric Charge',
            'Conductors and Insulators',
            'Charging by Induction',
            'Basic Properties of Electric Charge',
            "Coulumb's law",
            'Forces between multiple charges',
            'Electric field',
            'Electric field lines',
            'Electric Flux',
            'Electric Dipole',
            'Dipole in a uniform external field',
            'Continuous charge distribution',
            "Gauss's law",
            "Application of Gauss's law"
                ],
        'Electrostatic Potential and Capacitance': [
            'Electrostatic potential',
            'Potential due to a point charge',
            'Potential due to an electric dipole',
            'Potential due to a system of charges',
            'Equipotential surfaces',
            'Potential energy of a system of charges',
            'Potential energy in an external field',
            'Electrostatics of conductors',
            'Dielectrics and polarisation',
            'Capacitors and capacitance',
            'The parallel plate capacitor',
            'Effect of dielectric on capacitance',
            'Combination of capacitors',
            'Energy stored in a capacitor'
                ],
        'Current Electricity': [
            'Electric current',
            'Electric currents in conductors',
            "Ohm's law",
            'Drift of electrons and the origin of resistivity',
            "Limitations of Ohm's law",
            'Resistivity of various materials',
            'Temperature dependence of resistivity',
            'Electrical enery, power',
            'Combination of resistors -- Series and Parallel',
            'Cells, emf, internal resistance',
            'Cells in Series and in Parallel',
            "Kirchhoff's Rules",
            'Wheatstone Bridge',
            'Meter Bridge',
            'Potentiometer'
                ],
        'Moving Charges and Magnetism': [
            'Magnetic force',
            'Motion in a magnetic field',
            'Motion in combined electric and magnetic field',
            'Magnetic field due to a current element, Biot-Savart law',
            'Magnetic field on the Axis of a circular current loop',
            "Ampere's circuital law",
            'The solenoid and the toroid',
            'Force between two parallel currents',
            'Torque on current loop, magnetic dipole',
            'The moving coil galvanometer'
                ],
        'Magnetism and Matter': [
            'The bar magnet',
            "Magnetism and Gauss's law",
            "The Earth's magnetism",
            'Magnetisation and magnetic intensity',
            'Magnetic properties of materials',
            'Permanent magnets  and electromagnets'
                ],
        'Electromagnetic Induction': [
            'The experiments of Faraday and Henry',
            'Magnetic flux',
            "Faraday's law of induction",
            "Lenz's law and censervation of energy",
            'Motional elecromotive force',
            'Energy consideration: A quantitative study',
            'Eddy currents',
            'Inductance',
            'AC generator'
                ],
        'Alternating Current': [
            'AC voltage applied to a resistor',
            'Representation of AC current and voltage by rotating vectors -- phasors',
            'AC voltage applied to an inductor',
            'AC voltage applied to a capacitor',
            'AC voltage applied to a series LCR circuit',
            'Power in AC circuit: the power factor',
            'LC oscillations',
            'Transformers'
                ],
        'Electromagnetic Waves': [
            'Displacement current',
            'Electromagnetic waves',
            'Electromagnetic spectrum'
                ],
        'Ray Optics and Optical Instruments': [
            'Reflection of light by spherical mirrors',
            'Refraction',
            'Total internal reflection',
            'Refraction at spherical surfaces and by lenses',
            'Refraction through a prism',
            'Some natural phenomena due to sunlight',
            'Optical instruments'
                ],
        'Wave Optics': [
            'Huygens principle',
            'Refraction and reflection of plane waves using Huygens principle',
            'Coherent and incoherent addition of waves',
            "Interference of light waves and Young's experiment",
            'Diffraction',
            'Polalisation'
                ],
        'Dual Nature of Radiation and Matter': [
            'Electron emission',
            'Photoelectric effect',
            'Experimental study of photoelectric effect',
            'Photoelectric effect and wave theory of light',
            "Einstein's photoelectric equation: Energy quantum of radiation",
            'Particle nature of light: the photon',
            'Wave nature of matter',
            'Davisson and Germer experiment'
                ],
        'Atoms': [
            "Alpha-particle Scattering and Rutherford's nuclear model of atom",
            'Atomic spectra',
            'Bohr model of the Hydrogen atom',
            'The line spectra of the Hydrogen atom',
            "De Broglie's explanation of Bohr's second postulate of quantisation"
                ],
        'Nuclei': [
            'Atomic masses and composition of nucleus',
            'Size of the nucleus',
            'Mass-energy and nuclear binding energy',
            'Nuclear energy',
            'Radioactivity',
            'Nuclear energy'
                ],
        'Semiconductor Electronics': [
            'Classification of metals, conductors and semiconductors',
            'Intrinsic semiconductor',
            'Extrinsic semiconductor',
            'p-n junction',
            'Semiconductor diode',
            'Application of junction diode as a rectifier',
            'Special purpose p-n junction diodes',
            'Digital electronics and logic gates'
                ]
    },
    'Chemistry': {
        'Some basic concepts of chemistry': [
            'Nature of matter',
            'Properties of matter and their measurement',
            'Uncertainty in measurement',
            'Laws of chemical combinations',
            "Dalton's atomic theory",
            'Atomic and molecular masses',
            'Mole concept and molar masses',
            'Percentage composition',
            'Stoichiometry'
                ],
        'Structure of atom': [
            'Discovery of sub-atomic particles',
            'Atomic models',
            "Developments leading to the Bohr's model of atom",
            "Bohr's model for Hydrogen atom",
            'Towards the quantum mechanical model of the atom',
            'Quantum mechanical model of atom'
                ],
        'Classification of elements and periodicity of properties': [
            'Genesis of periodic classification',
            'The periodic table',
            'Nomenclature of elements with atomic numbers > 100',
            'Electronic configuration of elements',
            'Types of elements: s-, p-, d-, f-blocks',
            'Periodic trends in properties of elements'
                ],
        'Chemical bonding and molecular structure': [
            'Kossel-Lewis approach to chemical bonding',
            'Ionic or electrovalent bond',
            'Bond parameters',
            'The valence shell electron pair repulsion theory',
            'Valence bond theory',
            'Hybridisation',
            'Molecular orbital theory',
            'Bonding in some Homonuclear diatomic molecules',
            'Hydrogen bonding'
                ],
        'States of matter': [
            'Intermolecular forces',
            'Thermal energy',
            'Intermolecular forces vs thermal interactions',
            'The gaseous state',
            'The gas laws',
            'Ideal gas equation',
            'Kinetic energy and molecular speeds',
            'Kinetic molecular theory of gases',
            'Behaviour of real gases',
            'Liquification of gases',
            'Liquid state'
                ],
        'Thermodynamics': [
            'Thermodynamic terms',
            'Applications',
            'Calorimetry',
            'Enthalpy',
            'Enthalpies of different types of reactions',
            'Spontaneity',
            'Gibbs energy change and equilibrium'
                ],
        'Equilibrium': [
            'Equilibrium in physical processes',
            'Equilibrium in chemical processes',
            'Law of chemical equilibrium and equilibrium constant',
            'Homogeneous equilibria',
            'Heterogeneous equilibria',
            'Applications of equilibrium constants',
            'Relation between K, Q and G',
            'Factors affecting equilibria',
            'Ionic equilibrium in solution',
            'Acids, bases and salts',
            'Ionization of acids and bases',
            'Buffer solutions',
            'Solubility equilibria of sparingly soluble salts'
                ],
        'Redox reactions': [
            'Classical idea of Redox Reactions',
            'Redox reactions in terms of electron transfer reactions',
            'Oxidation number',
            'Redox reactions and electrode processes'
                ],
        'Hydrogen': [
            'Position of Hydrogen in the periodic table',
            'Dihydrogen',
            'Preparation of Dihydrogen',
            'Properties of Dihydrogen',
            'Hydrides',
            'Water',
            'Hydrogen Peroxide',
            'Heavy water',
            'Dihydrogen as a fuel'
                ],
        'The s-Block elements': [
            'Group 1 elements: Alkaly metals',
            'Compounds of Alkali metals',
            'Anomalous properties of Lithium',
            'Compounds of Sodium',
            'Biological importance of Sodium and Potassium',
            'Group 2 elements: Alkaline earth metals',
            'Compounds of Alkaline earth metals',
            'Anomalous behaviour of Beryllium',
            'Compounds of Calcium',
            'Biological importance of Magnesium and Calcium'
                ],
        'The p-Block elements': [
            'Group 13 elements: The Boron family',
            'Properties of Boron',
            'Compounds of Boron',
            'Uses of Boron and Aluminium and their compounds',
            'Group 14 elements: The Carbon family',
            'Anomalous behaviour of Carbon',
            'Allotropes of Carbon',
            'Compounds of Carbon and Silicon'
                ],
        'Organic Chemistry': [
            'Tetravalence of Carbon: Shapes of organic compounds',
            'Structural representations of organic compounds',
            'Classification of organic compounds',
            'Nomenclature of organic compounds',
            'Isomerism',
            'Organic reaction mechanism',
            'Purification',
            'Qualitative analysis',
            'Quantitative analysis'
                ],
        'Hydrocarbons': [
            'Classification',
            'Alkanes',
            'Alkenes',
            'Alkynes',
            'Aromatic hydrocarbon',
            'Carcinogenicity and toxicity'
                ],
        'Environmental chemistry': [
            'Environmental pollution',
            'Atmospheric pollution',
            'Water pollution',
            'Soil pollution',
            'Industrial waste',
            'Strategies to control environmental pollution',
            'Green chemistry'
                ],
        'The solid state': [
            'General characteristics of solid state',
            'Amorphous and crystalline solids',
            'Classification of crystalline solids',
            'Crystal lattices and unit cells',
            'Number of atoms in a unit cell',
            'Close pached structure',
            'Packing efficiency',
            'Calculations involving unit cell dimensions',
            'Imperfections in solids',
            'Electrical properties',
            'Magnetic properties'
                ],
        'Solutions': [
            'Types of solutions',
            'Expressing concentration of solutions',
            'Solubility',
            'Vapour pressure of liquid solutions',
            'Ideal and non-ideal solutions',
            'Colligative properties and determination of molar mass',
            'Abnormal molar masses'
                ],
        'Electrochemistry': [
            'Electrochemical cells',
            'Galvanic cells',
            'Nerst equation',
            'Conductance of electrolytic solutions',
            'Electrolytic cells and electrolysis',
            'Batteries',
            'Fuel cells',
            'Corrosion'
                ],
        'Chemical kinetics': [
            'Rate of a chemical reaction',
            'Factors influencing rate of a reaction',
            'Integrated rate equations',
            'Temperature dependence of the rate of a reaction',
            'Collision theory of chemical reactions'
                ],
        'Surface chemistry': [
            'Adsorption',
            'Catalysis',
            'Colloids',
            'Classification of Colloids',
            'Emulsions',
            'Colloids around us'
                ],
        'Isolation of elements': [
            'Occurrence of metals',
            'Concentration of ores',
            'Extraction of crude metals from concentrated ore',
            'Thermodynamic principles of metallurgy',
            'Electrochemical principles of metallurgy',
            'Oxidation reduction',
            'Refining',
            'Uses of Aluminium, Copper, Zinc and Iron'
                ],
        'More of p-Block elements': [
            'Group 15 elements',
            'Dinitrogen',
            'Ammonia',
            'Oxides of nitrogen',
            'Nitric acid',
            'Phosphorus',
            'Phosphine',
            'Phosphorus halides',
            'Oxoacids of phosphorus',
            'Group 16 elements',
            'Dioxygen',
            'Simple oxides',
            'Ozone',
            'Sulphur',
            'Sulphur Dioxide',
            'Oxoacids of Sulphur',
            'Sulphuric acid',
            'Group 17 elements',
            'Chlorine',
            'Hydrogen Chloride',
            'Oxoacids of halogens',
            'Interhalogen compounds',
            'Group 18 elements'
                ],
        'The d- and f-Block elements': [
            'Position in the periodic table',
            'Electronic configuration of the d-Block elements',
            'General properties',
            'Some important compounds',
            'The Lanthonoids',
            'The Actonoids',
            'Some applications'
                ],
        'Coordination compounds': [
            "Werner's theory of coordination compounds",
            'Definitions of some terms',
            'Nomenclature',
            'Isomerism',
            'Bonding',
            'Bonding in metal carbonyls',
            'Importance and applications'
                ],
        'Haloalkanes and haloarenes': [
            'Classification',
            'Nomenclature',
            'Nature of C-X bond',
            'Method of preparation of haloalkanes',
            'Preparation of haloarenes',
            'Physical properties',
            'Chemical reactions',
            'Polyhalogen compounds'
                ],
        'Alcohols, phenols and ethers': [
            'Classification',
            'Nomenclature',
            'Structures of functional groups',
            'Alcohols and phenols',
            'Some commercially important alcohols',
            'Ethers'
                ],
        'Aldehydes, ketones and carboxylic acids': [
            'Nomenclature and structure of carbonyl group',
            'Preparation of aldehydes and ketones',
            'Physical properties',
            'Chemical reactions',
            'Uses of aldehydes and ketones',
            ' Nomenclature and structure of carboxyl acids',
            'Physical properties',
            'Chemical reactions',
            'Uses of carboxyl acids',
                ],
        'Amines': [
            "Structure of amines",
            'Classification',
            'Nomenclature',
            'Preparation of amines',
            "Physical properties",
            'Chemical reactions',
            'Diazonium salts',
            'Physical properties',
            'Chemical reactions',
            'Aromatic compounds'
                ],
        'Biomolecules': [
            'Carbohydrates',
            'Proteins',
            'Enzymes',
            'Vitamins',
            'Nucleic acids',
            'Hormones'
                ],
        'Polymers': [
            'Classification of polymers',
            'Types of polymerisation reactions',
            'Molecular mass of polymers',
            'Biodegradable polymers',
            'Polymers of commercial importance'
                ],
        'Chemistry in everyday life': [
            'Drugs and their classification',
            'Drug-target interaction',
            'Therapeutic action of drugs',
            'Chemicals in food',
            'Cleansing agents'
        ]
    },
    'Mathematics': {
        'Sets': [
            'Sets and their representations',
            'The empty set',
            'Finite and infinite sets',
            'Equal sets',
            'Subsets',
            'Power set',
            'Universal set',
            'Venn diagrams',
            'Operations on sets',
            'Complement of a set',
            'Practical problems'
        ], 
        'Relations and functions 11': [
            'Cartesian product of sets',
            'Relations',
            'Functions'
        ], 
        'Trigonometric functions': [
            'Angles',
            'Trigonometric functions',
            'Trigonometric functions of sum and difference of two angles',
            'Trigonometric equations'
        ], 
        'Principle of mathematical induction': [
            'Motivation',
            'The principle of mathematical induction'
        ], 
        'Complex numbers and quadratic equations': [
            'Complex numbers',
            'Algebra of complex numbers',
            'The modulus and the conjugate of complex number',
            'Argand plane and polar representation',
            'Quadratic equations'
        ], 
        'Linear inequalities': [
            'Inequalities',
            'One variable',
            'Graphical solution in two variables',
            'Solution of system in two variables'
        ], 
        'Permutations and combinations': [
            'Fundamental principle of counting',
            'Permutations',
            'Combinations'
        ], 
        'Binomial theorem': [
            'Binomial theorem for positive integral indices',
            'General and middle terms'
        ], 
        'Sequences and series': [
            'Sequences',
            'Series',
            'Arithmetic progression',
            'Geometric progression',
            'Relationship between A.M. and G.M.',
            'Sum to n terms of Special series'
        ], 
        'Straight lines': [
            'Slope of a line',
            'Various forms of the equation of a line',
            'General equation of a line',
            'Distance of a point from a line'
        ], 
        'Conic sections': [
            'Sections of a cone',
            'Circle',
            'Parabola',
            'Ellipse',
            'Hyperbola'
        ], 
        'Indroduction to 3D geometry': [
            'Coordinate axes and coordinate planes in 3D space',
            'Coordinate of a point in space',
            'Distance between two points',
            'Section formula'
        ], 
        'Limits and derivatives': [
            'Intuitive idea of derivatives',
            'Limits',
            'Limits of Trigonometric functions',
            'Derivatives'
        ], 
        'Mathematical reasoning': [
            'Statements',
            'New statements from old',
            'Special words/phrases',
            'Implications',
            'Validating statements'
        ], 
        'Statistics': [
            'Measures of dispersion',
            'Range',
            'Mean deviation',
            'Variance and standard deviation',
            'Analysis of frequency distributions'
        ], 
        'Probability': [
            'Random experiments',
            'Event',
            'Axiomatic approach to probability'
        ], 
        'Relations and functions 12': [
            'Types of relations',
            'Types of functions',
            'Composition of functions and invertible function',
            'Binary operations'
        ], 
        'Inverse trigonometric functions': [
            'Basic concepts',
            'Properties of inverse trigonometric functions'
        ], 
        'Matrices': [
            'Matrix',
            'Typse of matrices',
            'Operations of matrices',
            'Transpose of a matrix',
            'Symmetric and skew symmetric matrices',
            'Transformation of a matrix',
            'Invertible matrices'
        ], 
        'Determinants': [
            'Determinant',
            'Properties of determinants',
            'Area of a triangle',
            'Minors and cofactors',
            'Adjoint and inverse of a matrix',
            'Applications of determinants and matrices'
        ], 
        'Continuity and differentiability': [
            'Continuity',
            'Differentiability',
            'Exponential and logarithmic functions',
            'Logarithmic differentiation',
            'Derivatives of functions in parametric forms',
            'Second order derivative',
            'Mean value theorem'
        ], 
        'Application of derivatives': [
            'Rate of change of quantities',
            'Increasing and decreasing functions',
            'Tangents and normals',
            'Approximations',
            'Maxima and minima'
        ], 
        'Integrals': [
            'Integration as an inverse process of differentiation',
            'Methods of integration',
            'Integrals of some particular functions',
            'Integration by partial fractions',
            'Integration by parts',
            'Definite integral',
            'Fundamental theorem of calculus',
            'Evaluation of definite integrals by substitution',
            'Some properties of definite integrals'
        ], 
        'Application of integrals': [
            'Area under simple curves',
            'Area between two curves'
        ], 
        'Differential equations': [
            'Basic concepts',
            'General and particular solutions of a differential equation',
            'Formation of a differential equation whose general solution is given',
            'Methods of solving first order, first degree differential equations'
        ], 
        'Vector algebra': [
            'Some basic concepts',
            'Types of vectors',
            'Addition of vectors',
            'Multiplication of a vector by a scalar',
            'Product of two vectors'
        ], 
        'Three dimensional geometry': [
            'Direction cosines and direction ratios of a line',
            'Equation of a line in space',
            'Angle between two lines',
            'Shortest distance between two lines',
            'Plane',
            'Coplanarity of two lines',
            'Angle between two planes',
            'Distance of a point from a plane',
            'Angle between a line and a plane'
        ], 
        'Linear programming': [
            'Linear programming problem and its mathematical formulation',
            'Different types of linear programming problems'
        ]
    } 
})