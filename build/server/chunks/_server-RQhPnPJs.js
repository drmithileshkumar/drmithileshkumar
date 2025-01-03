import { a as getDBCollection } from './mongo2-KmFBDmRB.js';
import 'mongodb';
import { e as error } from './index-DzcLzHBX.js';

const initializeNewDrawing = (publicID, title, description, category, elements, defs, viewBox, appHistory, permission, count) => {
  let newDrawing = {
    publicID,
    creationTimestamp: Date.now(),
    title,
    description,
    category,
    elements,
    defs,
    viewBox,
    appHistory,
    permission,
    //public, private
    price: 0,
    drawingID: publicID + count + "R" + Math.floor(100 * Math.random())
  };
  return newDrawing;
};
async function validateSubscription(user, userCollection) {
  if (!user) {
    return {
      status: 404,
      body: { message: "User not found" }
    };
  }
  const publicID = user.publicID;
  if (!user.products) {
    let startdate = /* @__PURE__ */ new Date();
    let newdate = /* @__PURE__ */ new Date();
    let expirydate = new Date(newdate.setDate(newdate.getDate() + 7));
    let products = {
      vectorial: {
        subscribed: true,
        valid: true,
        start: {
          date: startdate.getDate(),
          month: startdate.getMonth(),
          year: startdate.getFullYear()
        },
        end: {
          date: expirydate.getDate(),
          month: expirydate.getMonth(),
          year: expirydate.getFullYear()
        },
        type: "Trial"
      }
    };
    const confirmTrial = await userCollection.updateOne({ publicID }, { $set: { products } }, { upsert: true });
    if (!confirmTrial.acknowledged) {
      return {
        status: 500,
        body: { message: "Failed to create subscription." }
      };
    }
  } else if (!user.products.vectorial) {
    let startdate = /* @__PURE__ */ new Date();
    let newdate = /* @__PURE__ */ new Date();
    let expirydate = new Date(newdate.setDate(newdate.getDate() + 7));
    let products = {
      vectorial: {
        subscribed: true,
        valid: true,
        start: {
          date: startdate.getDate(),
          month: startdate.getMonth(),
          year: startdate.getFullYear()
        },
        end: {
          date: expirydate.getDate(),
          month: expirydate.getMonth(),
          year: expirydate.getFullYear()
        },
        type: "Trial"
      }
    };
    const confirmTrial = await userCollection.updateOne({ publicID }, { $set: { "products.vectorial": products.vectorial } }, { upsert: true });
    if (!confirmTrial.acknowledged) {
      return {
        status: 500,
        body: { message: "Failed to create subscription." }
      };
    }
  } else if (!user.products.vectorial.valid) {
    return {
      status: 410,
      body: { message: "Renew subscription." }
    };
  }
  let enddate = user.products.vectorial.end;
  if (/* @__PURE__ */ new Date() > new Date(enddate.year, enddate.month, enddate.date)) {
    const confirmValidity = await userCollection.updateOne({ publicID }, { $set: { "products.vectorial.valid": false } }, { upsert: true });
    if (!confirmValidity.acknowledged) {
      return {
        status: 500,
        body: { message: "Failed to update validity." }
      };
    }
    return {
      status: 411,
      body: { message: "Renew subscription." }
    };
  }
  return {
    status: 200,
    body: { message: "Valid", type: user.products.vectorial.type, expire: user.products.vectorial.end }
  };
}
async function GET({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const userCollection = await getDBCollection("users");
  const user = await userCollection.findOne({ publicID });
  const res = await validateSubscription(user, userCollection);
  if (res.status !== 200) {
    return new Response(JSON.stringify(res.body), { status: res.status });
  }
  const drawingsCollection = await getDBCollection("drawings");
  const drawings = await drawingsCollection.find({ publicID }).toArray();
  if (!drawings) {
    drawings = [];
  }
  return new Response(JSON.stringify(drawings));
}
const updateElements = (drawing) => {
  let elemIds = Object.keys(drawing.elements);
  elemIds.forEach((elemId) => {
    if (elemId !== "Layers") {
      if (drawing.elements[elemId].children) {
        drawing.elements[elemId].children.forEach((childId, index) => {
          drawing.elements[elemId].children[index] = childId.split("-")[0] + "-" + drawing.drawingID + "-" + childId.split("-")[2];
        });
      }
      if (drawing.elements[elemId].fill?.includes("url")) {
        drawing.elements[elemId].fill = drawing.elements[elemId].fill.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.elements[elemId].fill.split("-")[2];
      }
      if (drawing.elements[elemId].stroke?.includes("url")) {
        drawing.elements[elemId].stroke = drawing.elements[elemId].stroke.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.elements[elemId].stroke.split("-")[2];
      }
      if (drawing.elements[elemId].markerStart?.includes("url")) {
        drawing.elements[elemId].markerStart = drawing.elements[elemId].markerStart.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.elements[elemId].markerStart.split("-")[2];
      }
      if (drawing.elements[elemId].markerMid?.includes("url")) {
        drawing.elements[elemId].markerMid = drawing.elements[elemId].markerMid.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.elements[elemId].markerMid.split("-")[2];
      }
      if (drawing.elements[elemId].markerEnd?.includes("url")) {
        drawing.elements[elemId].markerEnd = drawing.elements[elemId].markerEnd.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.elements[elemId].markerEnd.split("-")[2];
      }
      if (drawing.elements[elemId].mask?.includes("url")) {
        let masks = drawing.elements[elemId].mask.split(" ");
        masks.forEach((mask, index) => {
          if (mask.includes("url")) {
            masks[index] = mask.split("-")[0] + "-" + drawing.drawingID + "-" + mask.split("-")[2];
          }
        });
        drawing.elements[elemId].mask = masks.join(" ");
      }
      if (drawing.elements[elemId].filter?.includes("url")) {
        let filters = drawing.elements[elemId].filter.split(" ");
        filters.forEach((filter, index) => {
          if (filter.includes("url")) {
            filters[index] = filter.split("-")[0] + "-" + drawing.drawingID + "-" + filter.split("-")[2];
          }
        });
        drawing.elements[elemId].filter = filters.join(" ");
      }
      let layer = drawing.elements[elemId].layer?.split("-");
      if (layer && layer.length === 3) {
        drawing.elements[elemId].layer = layer[0] + "-" + drawing.drawingID + "-" + layer[2];
      } else if (layer) {
        drawing.elements[elemId].layer = layer[0] + "-" + drawing.drawingID + "-" + layer[1];
      }
      let parent = drawing.elements[elemId].parent?.split("-");
      if (parent && parent.length === 3) {
        drawing.elements[elemId].parent = parent[0] + "-" + drawing.drawingID + "-" + parent[2];
      } else if (parent && parent.length === 2) {
        drawing.elements[elemId].parent = parent[0] + "-" + drawing.drawingID + "-" + parent[1];
      } else if (parent) {
        drawing.elements[elemId].parent = parent[0] + "-" + drawing.drawingID + "-0";
      }
      let newId = elemId.split("-")[0] + "-" + drawing.drawingID + "-" + elemId.split("-")[2];
      drawing.elements[elemId].id = newId;
      delete Object.assign(drawing.elements, { [newId]: drawing.elements[elemId] })[elemId];
    }
  });
  drawing.elements["Layers"].forEach((layer, index) => {
    drawing.elements["Layers"][index] = layer.split("-")[0] + "-" + drawing.drawingID + "-" + layer.split("-")[2];
  });
};
const updateDefs = (drawing) => {
  let elemIds = Object.keys(drawing.defs);
  elemIds.forEach((elemId) => {
    if (drawing.defs[elemId].children) {
      drawing.defs[elemId].children.forEach((childId, index) => {
        drawing.defs[elemId].children[index] = childId.split("-")[0] + "-" + drawing.drawingID + "-" + childId.split("-")[2];
      });
    }
    if (drawing.defs[elemId].fill?.includes("url")) {
      drawing.defs[elemId].fill = drawing.defs[elemId].fill.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.defs[elemId].fill.split("-")[2];
    }
    if (drawing.defs[elemId].stroke?.includes("url")) {
      drawing.defs[elemId].stroke = drawing.defs[elemId].stroke.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.defs[elemId].stroke.split("-")[2];
    }
    if (drawing.defs[elemId].markerStart?.includes("url")) {
      drawing.defs[elemId].markerStart = drawing.defs[elemId].markerStart.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.defs[elemId].markerStart.split("-")[2];
    }
    if (drawing.defs[elemId].markerMid?.includes("url")) {
      drawing.defs[elemId].markerMid = drawing.defs[elemId].markerMid.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.defs[elemId].markerMid.split("-")[2];
    }
    if (drawing.defs[elemId].markerEnd?.includes("url")) {
      drawing.defs[elemId].markerEnd = drawing.defs[elemId].markerEnd.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.defs[elemId].markerEnd.split("-")[2];
    }
    if (drawing.defs[elemId].mask?.includes("url")) {
      let masks = drawing.defs[elemId].mask.split(" ");
      masks.forEach((mask, index) => {
        if (mask.includes("url")) {
          masks[index] = mask.split("-")[0] + "-" + drawing.drawingID + "-" + mask.split("-")[2];
        }
      });
      drawing.defs[elemId].mask = masks.join(" ");
    }
    if (drawing.defs[elemId].filter?.includes("url")) {
      let filters = drawing.defs[elemId].filter.split(" ");
      filters.forEach((filter, index) => {
        if (filter.includes("url")) {
          filters[index] = filter.split("-")[0] + "-" + drawing.drawingID + "-" + filter.split("-")[2];
        }
      });
      drawing.defs[elemId].filter = filters.join(" ");
    }
    let layer = drawing.defs[elemId].layer?.split("-");
    if (layer && layer.length === 3) {
      drawing.defs[elemId].layer = layer[0] + "-" + drawing.drawingID + "-" + layer[2];
    } else if (layer) {
      drawing.defs[elemId].layer = layer[0] + "-" + drawing.drawingID + "-" + layer[1];
    }
    let parent = drawing.defs[elemId].parent?.split("-");
    if (parent && parent.length === 3) {
      drawing.defs[elemId].parent = parent[0] + "-" + drawing.drawingID + "-" + parent[2];
    } else if (parent && parent.length === 2) {
      drawing.defs[elemId].parent = parent[0] + "-" + drawing.drawingID + "-" + parent[1];
    } else if (parent) {
      drawing.defs[elemId].parent = parent[0] + "-" + drawing.drawingID + "-0";
    }
    if (drawing.defs[elemId].tag === "textMask") {
      drawing.defs[elemId].shape = drawing.defs[elemId].shape.split("-")[0] + "-" + drawing.drawingID + "-" + drawing.defs[elemId].shape.split("-")[2];
      let texts = drawing.defs[elemId].text;
      texts.forEach((text, index) => {
        texts[index] = text.split("-")[0] + "-" + drawing.drawingID + "-" + text.split("-")[2];
      });
      drawing.defs[elemId].text = texts;
    }
    let newId = elemId.split("-")[0] + "-" + drawing.drawingID + "-" + elemId.split("-")[2];
    drawing.defs[elemId].id = newId;
    delete Object.assign(drawing.defs, { [newId]: drawing.defs[elemId] })[elemId];
  });
};
const updateHistory = (drawing) => {
  drawing.appHistory.forEach((history) => {
    if (history.id) {
      history.id = history.id.split("-")[0] + "-" + drawing.drawingID + "-" + history.id.split("-")[2];
    }
  });
};
async function POST({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const userCollection = await getDBCollection("users");
  await userCollection.findOne({ publicID });
  const { title, description, category, elements, defs, viewBox, appHistory, permission } = await request.json();
  const drawingsCollection = await getDBCollection("drawings");
  const count = await drawingsCollection.countDocuments({ publicID });
  const newDrawing = initializeNewDrawing(publicID, title, description, category, elements, defs, viewBox, appHistory, permission, count);
  updateElements(newDrawing);
  updateDefs(newDrawing);
  updateHistory(newDrawing);
  const confirm = await drawingsCollection.insertOne(newDrawing);
  if (!confirm.acknowledged) {
    return error(500, "Failed");
  }
  return new Response(JSON.stringify({ id: newDrawing.drawingID }));
}
async function PUT({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const userCollection = await getDBCollection("users");
  await userCollection.findOne({ publicID });
  const { title, description, category, elements, defs, viewBox, appHistory, permission, drawingID } = await request.json();
  const drawingsCollection = await getDBCollection("drawings");
  const update = await drawingsCollection.updateOne({ drawingID }, {
    $set: {
      title,
      description,
      category,
      elements,
      defs,
      viewBox,
      appHistory,
      permission
    }
  });
  if (!update.acknowledged) {
    return error(500, "Failed");
  }
  return new Response("Success", { status: 200 });
}
async function DELETE({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const { drawingID } = await request.json();
  const drawingsCollection = await getDBCollection("drawings");
  const confirm = await drawingsCollection.deleteOne({ publicID, drawingID });
  if (!confirm.acknowledged) {
    return error(504, "Delete operation failed");
  }
  return new Response("Success");
}

export { DELETE, GET, POST, PUT };
//# sourceMappingURL=_server-RQhPnPJs.js.map
