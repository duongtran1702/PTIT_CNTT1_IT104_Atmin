

export const Search_bai9 = () => {
  return (
    <>
         <h3 style={{ textAlign: "center", marginBottom: 40,  }}>
                Quản lý công việc
              </h3>
              <form
                className="d-flex justify-content-center
                              align-items-center mb-4"
              >
                <div className="form-outline flex-fill">
                  <input type="text" id="form2" className="form-control" />
                  <label className="form-label" htmlFor="form2">
                    Thêm công việc
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-info
                                  ms-2"
                >
                  Thêm
                </button>
              </form>
    </>
  )
}
