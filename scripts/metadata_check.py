import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
project = json.loads((root / "project.json").read_text(encoding="utf-8-sig"))
required_languages = {"HTML", "CSS", "JavaScript", "TypeScript", "Python"}
missing = required_languages - set(project.get("languages", []))
if missing:
    raise SystemExit(f"Missing languages in project.json: {sorted(missing)}")
for key, relative in project.get("entrypoints", {}).items():
    path = root / relative
    if not path.exists():
        raise SystemExit(f"Missing entrypoint for {key}: {relative}")
print("Metadata check passed.")

