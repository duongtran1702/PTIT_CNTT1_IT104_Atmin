

export const Tasks_bai9 = () => {
  return (
    <>
    <div className="tab-content">
                <div className="tab-pane fade show active">
                  <ul className="list-group mb-0">
                    <li
                      className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          rounded justify-content-between"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input
                          className="form-check-input
                                                  me-2"
                          type="checkbox"
                          defaultChecked={false}
                        />
                        <s>Cras justo odio</s>
                      </div>
                      <div>
                        <a
                          href="#!"
                          className="text-info"
                          title="Sửa công việc"
                        >
                          <i
                            className="fas
                                                      fa-pencil-alt
                                                      me-3"
                          />
                        </a>
                        <a
                          href="#!"
                          className="text-danger"
                          title="Xóa công việc"
                        >
                          <i
                            className="fas
                                                      fa-trash-alt"
                          />
                        </a>
                      </div>
                    </li>
                    <li
                      className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          justify-content-between"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input className="form-check-input" type="checkbox" />
                        Cras justo odio
                      </div>
                      <div>
                        <a
                          href="#!"
                          className="text-info"
                          title="Sửa công việc"
                        >
                          <i
                            className="fas
                                                      fa-pencil-alt
                                                      me-3"
                          />
                        </a>
                        <a
                          href="#!"
                          className="text-danger"
                          title="Xóa công việc"
                        >
                          <i
                            className="fas
                                                      fa-trash-alt"
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
    </>
  )
}
