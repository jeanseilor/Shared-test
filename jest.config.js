module.exports = {
	verbose: true,
	reporters: [
		'default',
		[
			'jest-junit',
			{
				suiteName: 'jest tests',
                outputDirectory: './coverage/',
                outputName: "junit.xml",
				classNameTemplate: '{classname} - {title}',
				titleTemplate: '{classname} - {title}',
				ancestorSeparator: ' > ',
				usePathForSuiteName: 'true'
			}
			
		]
	],
	testResultsProcessor: 'jest-sonar-reporter',
	coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
	coverageThreshold: {
		global: {
			branches: 100,
			lines: 100,
			functions: 100,
			statements: 100
		}
	},
	collectCoverageFrom: ['src/**/*.{js,jsx,tsx,ts}', '!src/index.tsx'],
	roots: ['<rootDir>/src'],
	testEnvironment: 'jsdom',
	testURL: 'http://localhost',
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|tsx|ts)$'],
	moduleFileExtensions: ['js', 'json', 'jsx', 'tsx', 'ts']
};
