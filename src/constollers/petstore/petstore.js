let app = { get: function () {} };

/**
 * @openapi
 * tags:
 *   - name: "Petshops"
 *     description: "PetShop operations"
 */

/**
 * @openapi
 * /pets:
 *  get:
 *    description: |
 *      ペット一覧を返す
 *    tags: [Petshops]
 *    operationId: findPets
 *    parameters:
 *      - name: tags
 *        in: query
 *        description: filterByをかけるタグ
 *        style: form
 *        schema:
 *          type: array
 *          items:
 *            type: string
 *      - name: limit
 *        in: query
 *        description: 最大表示数
 *        required: false
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *      '200':
 *        description: pet response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Pet'
 *      default:
 *        description: unexpected error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */
app.get("/pet", (req, res) => {
  res.json({
    /** petdata */
  });
});

/**
 * @openapi
 * /pets:
 *  post:
 *    description: 新規ペットを追加する
 *    operationId: addPet
 *    tags: [Petshops]
 *    requestBody:
 *      description: Pet to add to the store
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewPet'
 *    responses:
 *      '200':
 *        description: pet response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Pet'
 *      default:
 *        description: unexpected error
 *        content:
 *          application/json:
 *            schema:
 */
app.post("/pet", (req, res) => {
  res.json({
    /** petdata */
  });
});

/**
 * @openapi
 * /pets/{id}:
 *   get:
 *     description: 特定のペット情報を取得する
 *     tags: [Petshops]
 *     operationId: find pet by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of pet to fetch
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '200':
 *         description: pet response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       default:
 *         description: unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

app.get("/pet/:id", (req, res) => {
  res.json({
    /** petdata */
  });
});
