from collections import defaultdict, deque
from typing import Any, Dict, List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# ✅ Allow frontend (localhost:3000) to call backend (localhost:8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}


# ---------- Models ----------
class PipelinePayload(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]


# ---------- DAG check ----------
def check_is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """
    Kahn's algorithm (topological sort).
    Returns True if graph has no cycle (is DAG), else False.
    """
    node_ids = {n.get("id") for n in nodes if n.get("id") is not None}

    # If no nodes, treat as DAG (no cycle)
    if not node_ids:
        return True

    adj = defaultdict(list)
    indeg = {nid: 0 for nid in node_ids}

    for e in edges:
        src = e.get("source")
        tgt = e.get("target")

        # Ignore malformed edges or edges referencing missing nodes
        if src not in node_ids or tgt not in node_ids:
            continue

        adj[src].append(tgt)
        indeg[tgt] += 1

    q = deque([nid for nid, d in indeg.items() if d == 0])
    visited = 0

    while q:
        u = q.popleft()
        visited += 1
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)

    return visited == len(node_ids)


# ---------- Endpoint ----------
@app.post("/pipelines/parse")
def parse_pipeline(payload: PipelinePayload):
    num_nodes = len(payload.nodes)
    num_edges = len(payload.edges)
    is_dag = check_is_dag(payload.nodes, payload.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }
