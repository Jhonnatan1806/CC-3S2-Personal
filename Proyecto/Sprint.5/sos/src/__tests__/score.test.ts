import { Score } from "@/classes/models/Score";

describe("Score", () => {
    describe("getPoints()", () => {
        test("S.1", () => {
            const score = new Score();
            expect(score.getPoints()).toBe(0);
        });

        test("S.2", () => {
            const score = new Score();
            score.setPoints(10);
            score.setPoints(15);
            expect(score.getPoints()).toBe(15);
        });

        test("S.3", () => {
            const score = new Score();
            score.addPoints(10);
            score.addPoints(5);
            expect(score.getPoints()).toBe(15);
        });
    });
});