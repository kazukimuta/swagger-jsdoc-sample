let app = { get: function () {} };

/**
 * @openapi
 * tags:
 *  - name: Minimum
 *    description: 最小限のAPI定義サンプル
 */

/**
 * @openapi
 * /minimum:
 *   get:
 *     tags:
 *       - Minimum
 *     summary: 最小限のAPI定義
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             example: {
 *                result: "OK",
 *                id : 12345,
 *                tags: [
 *                  "1",
 *                  "2",
 *                  "3"
 *                ]
 *             }
 */
app.get("/minimum", (req, res) => {
  res.json({
    /** user list */
  });
});
